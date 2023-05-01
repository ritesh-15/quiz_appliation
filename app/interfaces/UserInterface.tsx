export interface IUserInterface {
  email: string
  data: Data
}

export interface Data {
  email: string
  jwt: string
  id: number
  username: string
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
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
