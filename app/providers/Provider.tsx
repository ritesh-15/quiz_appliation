"use client"

import { Toaster } from "react-hot-toast"
import { ThemeProvider } from "next-themes"

interface Props {
  children: React.ReactNode
}

const Provider = ({ children }: Props) => {
  return (
    <>
      <Toaster />
      <ThemeProvider attribute="class" />
      {children}
    </>
  )
}

export default Provider
