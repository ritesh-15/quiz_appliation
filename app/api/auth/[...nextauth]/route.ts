import api from "@/app/config/axios"
import { AuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await api.post("/auth/local", {
            identifier: credentials?.email!!,
            password: credentials?.password!!,
          })

          return {
            email: res.data.user.email,
            ...res.data,
          }
        } catch (err: any) {
          throw new Error(err.response.data.error.message)
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      return Promise.resolve({ ...token, ...user })
    },
    session: ({ session, token, user }) => {
      // @ts-ignore
      session.user.data = token.user
      return Promise.resolve(session)
    },
  },
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "production" ? false : true,
  session: {
    strategy: "jwt",
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
export { authOptions }
