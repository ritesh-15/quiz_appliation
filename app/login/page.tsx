import { ClientOnly } from "../components"
import { getCurrentUser } from "../utils/auth.utils"
import LoginClient from "./LoginClient"

type Props = {}

const Login = async (props: Props) => {
  const session = await getCurrentUser()

  return (
    <>
      <ClientOnly>
        <LoginClient isLoggedIn={session ? true : false} />
      </ClientOnly>
    </>
  )
}

export default Login
