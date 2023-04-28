"use client"

import { useState } from "react"
import FormControl from "../form_control/FormControl"
import Button from "../button/Button"
import { AiFillDelete } from "react-icons/ai"

type Props = {}

const Question = (props: Props) => {
  const [options, setOptions] = useState([{ value: "", isAnswer: false }])

  const handleAddOption = () => {
    setOptions([...options, { value: "", isAnswer: false }])
  }

  return (
    <div className="mb-8 bg-white dark:bg-darkBg rounded-lg shadow-lg p-4">
      <div className="pb-4 border-b">
        <FormControl label="Question" />
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <small>You can add upto 4 options</small>
        {options.map((option) => (
          <div className="flex flex-col gap-4 w-full">
            <FormControl className="w-full" label="Option" />
          </div>
        ))}

        {options.length < 4 && (
          <span
            onClick={handleAddOption}
            className="mt-4 inline-block mr-auto w-fit hover:text-primary cursor-pointer"
          >
            Add option
          </span>
        )}
      </div>

      <Button className="mt-4 w-fit gap-2 bg-red-500 flex items-center">
        <>
          <AiFillDelete />
          <span>Delete</span>
        </>
      </Button>
    </div>
  )
}

export default Question
