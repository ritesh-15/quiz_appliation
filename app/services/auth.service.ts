import api from "../config/axios"
import { ILoginSchema, IRegisterSchema } from "../validation/auth"
import toast from "react-hot-toast"

class AuthService {
  static login(data: ILoginSchema) {
    const _data = {
      identifier: data.email,
      password: data.password,
    }

    return api.post("/auth/local", _data)
  }

  static async register(data: IRegisterSchema) {
    try {
      const _data = {
        username: data.email,
        ...data,
      }

      const response = await api.post("/auth/local/register", _data)

      toast.success(
        "Account created successfully, please login again to continue"
      )

      return response.data
    } catch (error) {
      // @ts-ignore
      toast.error(error.response.data.error.message)
      return null
    }
  }
}

export default AuthService
