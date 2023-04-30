import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { IUserInterface } from "../interfaces/UserInterface"

export function getSession() {
  return getServerSession(authOptions)
}

export async function getCurrentUser() {
  try {
    const session: any = await getSession()
    if (!session) throw new Error("Session does not exist")
    return <IUserInterface>session.user
  } catch (error: any) {
    return null
  }
}
