"use client"

import Link from "next/link"
import { Button, FormControl } from "../components"

type Props = {}

const page = (props: Props) => {
  return (
    <main className="flex flex-col md:flex-row w-full min-h-screen gap-12 md:gap-4">
      <div className="w-full bg__gradiant min-h-screen md:h-full flex flex-col items-center justify-center px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl text-white font-bold leading-loose text-center">
          Digital Quiz Platform For Learning
        </h1>
        <h5 className="mt-3 text-lg md:text-xl text-white text-center">
          You will never know everything but you will know more
        </h5>
      </div>

      <div className="w-full flex flex-col justify-center">
        <form className="w-[95%] max-w-[450px] mx-auto" action="">
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
              onChange={() => {}}
              value=""
              label="Email address"
            />
          </div>
          <div className="mb-4">
            <FormControl
              name="password"
              type="password"
              onChange={() => {}}
              value=""
              label="Password"
            />
          </div>
          <Button>Log In</Button>
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

export default page
