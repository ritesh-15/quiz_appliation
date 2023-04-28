"use client"

import { useState } from "react"
import { MdKeyboardArrowRight } from "react-icons/md"

type Props = {
  title: string
  children: React.ReactNode
}

const Accordian = ({ title, children }: Props) => {
  const [expanded, setExpanded] = useState(false)

  const handleExpanded = () => setExpanded(!expanded)

  return (
    <div className="w-full">
      <div
        onClick={handleExpanded}
        className="flex select-none shadow-lg px-3 py-4 items-center cursor-pointer justify-between bg-white dark:bg-secondary rounded-lg rounded-b-none border-b"
      >
        <h2>{title}</h2>
        <MdKeyboardArrowRight className="text-2xl" />
      </div>

      <div
        className={`bg-white dark:bg-secondary px-3 py-3 ${
          expanded ? "visible" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default Accordian
