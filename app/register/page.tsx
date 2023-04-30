import { ClientOnly } from "../components"
import { getCurrentUser } from "../utils/auth.utils"
import RegisterClient from "./RegisterClient"

type Props = {}

const Register = async (props: Props) => {
  const session = await getCurrentUser()

  return (
    <>
      <ClientOnly>
        <RegisterClient isLoggedIn={session ? true : false} />
      </ClientOnly>
    </>
  )
}

export default Register
