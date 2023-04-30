"use client"

import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: string | JSX.Element
  loading?: boolean
}

const Button = ({ children, className, loading, ...props }: Props) => {
  return (
    <button
      className={`bg-primary text-white py-4 font-semibold hover:shadow-lg px-2 rounded-md ${className}`}
      {...props}
    >
      {loading ? (
        <div className="w-[25px] h-[25px] rounded-full animate-spin border-b border-white border-3 border-r border-l mx-auto" />
      ) : (
        children
      )}
    </button>
  )
}

export default Button
