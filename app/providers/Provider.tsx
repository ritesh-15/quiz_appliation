"use client"

import { Toaster } from "react-hot-toast"
import { ThemeProvider } from "next-themes"

const Provider = () => {
  return (
    <>
      <Toaster />
      <ThemeProvider defaultTheme="light" attribute="class" />
    </>
  )
}

export default Provider
