"use client"

import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: string | JSX.Element
}

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      className={`bg-primary text-white py-4 font-semibold hover:shadow-lg px-2 rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
