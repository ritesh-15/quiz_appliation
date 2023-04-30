"use client"

import { useFormik } from "formik"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { FormControl, Button } from "../components"
import { ILoginSchema, LoginSchema } from "../validation/auth"

type Props = {
  isLoggedIn: boolean
}

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const initialValues: ILoginSchema = {
    email: "",
    password: "",
  }

  const { handleChange, handleSubmit, values, errors, handleBlur } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      await handleLogin(values)
    },
    validationSchema: LoginSchema,
  })

  const handleLogin = async (values: ILoginSchema) => {
    setLoading(true)

    const response = await signIn("credentials", {
      redirect: false,
      ...values,
    })

    setLoading(false)

    if (response?.error) {
      // @ts-ignore
      toast.error(response.error)
      return
    }

    if (response?.ok) {
      toast.success("Login successfull!")
      router.replace("/")
      return
    }
  }

  return { handleChange, handleSubmit, values, errors, handleBlur, loading }
}

const LoginClient = ({ isLoggedIn }: Props) => {
  const { handleChange, handleSubmit, values, errors, handleBlur, loading } =
    useLogin()
  const router = useRouter()

  if (isLoggedIn) {
    router.replace("/")
    return null
  }

  return (
    <main className="flex flex-col md:flex-row w-full min-h-screen gap-12 md:gap-4 bg-white dark:bg-darkBg">
      <div className="w-full bg__gradiant min-h-screen md:h-full flex flex-col items-center justify-center px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl text-white font-bold leading-loose text-center">
          Digital Quiz Platform For Learning
        </h1>
        <h5 className="mt-3 text-lg md:text-xl text-white text-center">
          You will never know everything but you will know more
        </h5>
      </div>

      <div className="w-full flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[95%] max-w-[450px] mx-auto"
          action=""
        >
          <div className="mb-8">
            <h1 className="text-xl font-bold">Hey Hello 👋</h1>
            <p className="mt-1 font-lg">
              Enter the information you entered while registering
            </p>
          </div>

          <div className="mb-4">
            <FormControl
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
              error={errors.email}
              onBlur={handleBlur}
              label="Email address"
              autoComplete="true"
            />
          </div>
          <div className="mb-4">
            <FormControl
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
              error={errors.password}
              onBlur={handleBlur}
              label="Password"
            />
          </div>
          <Button loading={loading} className="w-full" type="submit">
            Log In
          </Button>
        </form>
        <div className="flex items-center gap-2 mt-8 justify-center">
          <p>Don't have an account?</p>
          <Link href="/register" className="text-primary text-bold">
            Create an account
          </Link>
        </div>
      </div>
    </main>
  )
}

export default LoginClient
