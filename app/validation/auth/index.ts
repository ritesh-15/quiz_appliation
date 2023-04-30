import * as y from "yup"

export const LoginSchema = y.object({
  email: y
    .string()
    .email("email address should be valid")
    .required("email address should be provided"),
  password: y
    .string()
    .min(6, "password must be at least 6 characters long")
    .required("password should be provided"),
})

export type ILoginSchema = y.InferType<typeof LoginSchema>

export const RegisterSchema = y.object({
  email: y
    .string()
    .email("email address should be valid")
    .required("email address should be provided"),
  password: y
    .string()
    .min(6, "password must be at least 6 characters long")
    .required("password should be provided"),
  name: y.string().trim().required("name should be provided"),
})

export type IRegisterSchema = y.InferType<typeof RegisterSchema>
