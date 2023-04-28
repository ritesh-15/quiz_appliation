"use client"

import { Button, Question } from "@/app/components"
import Link from "next/link"
import { useState } from "react"
import { AiOutlineArrowLeft } from "react-icons/ai"

type Props = {}

const AddQuestions = (props: Props) => {
  const [questions, setQuestions] = useState<any>([])

  const handleAddMoreQuestion = () => {
    setQuestions([...questions, {}])
  }

  return (
    <div className="w-full min-h-full pb-8">
      <div className="flex bg-white dark:bg-darkBg px-3 py-4 w-full items-center gap-4">
        <Link href="/">
          <AiOutlineArrowLeft className="text-xl cursor-pointer" />
        </Link>
        <h1 className="font-semibold">Quiz on javascript</h1>
      </div>

      <div className="w-full max-w-[550px] mx-auto">
        <form
          action=""
          className="flex flex-col w-full max-w-[550px] mx-auto  mt-12 gap-4"
        >
          <Question />
          {questions.map((question: any) => (
            <Question />
          ))}
        </form>

        <Button onClick={handleAddMoreQuestion}>Add more questions</Button>
      </div>
    </div>
  )
}

export default AddQuestions
