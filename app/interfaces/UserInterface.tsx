export interface IUserInterface {
  email: string
  data: Data
}

export interface Data {
  email: string
  jwt: string
  user: User
}

export interface User {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
}
