"use client"

import { useFormik } from "formik"
import { useRouter } from "next/navigation"
import { useState } from "react"
import AuthService from "../services/auth.service"
import { IRegisterSchema, RegisterSchema } from "../validation/auth"
import Link from "next/link"
import { FormControl, Button } from "../components"

type Props = {
  isLoggedIn: boolean
}

const useRegister = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const initialValues: IRegisterSchema = {
    name: "",
    email: "",
    password: "",
  }

  const { handleBlur, handleChange, handleSubmit, values, errors } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      await handleRegister(values)
    },
    validationSchema: RegisterSchema,
  })

  const handleRegister = async (data: IRegisterSchema) => {
    setLoading(true)
    const response = await AuthService.register(data)
    setLoading(false)

    if (response) router.replace("/login")
  }

  return { handleBlur, handleChange, handleSubmit, values, errors, loading }
}

const RegisterClient = ({ isLoggedIn }: Props) => {
  const { handleBlur, handleChange, handleSubmit, values, errors, loading } =
    useRegister()

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

      <div className="w-full flex flex-col justify-center ">
        <form
          onSubmit={handleSubmit}
          className="w-[95%] max-w-[450px] mx-auto"
          action=""
        >
          <div className="mb-8">
            <h1 className="text-xl font-bold">Hey Hello 👋</h1>
            <p className="mt-1 font-lg">
              Let's get started by creating an account
            </p>
          </div>

          <div className="mb-4">
            <FormControl
              name="name"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={errors.name}
              label="Name"
            />
          </div>
          <div className="mb-4">
            <FormControl
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email}
              label="Email address"
            />
          </div>
          <div className="mb-4">
            <FormControl
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={errors.password}
              label="Password"
            />
          </div>
          <Button loading={loading} className="w-full" type="submit">
            Create an account
          </Button>
        </form>
        <div className="flex items-center gap-2 mt-8 justify-center">
          <p>Already have an account?</p>
          <Link href="/login" className="text-primary text-bold">
            Sign In
          </Link>
        </div>
      </div>
    </main>
  )
}

export default RegisterClient
