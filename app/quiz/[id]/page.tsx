"use client"

import {
  Accordian,
  Button,
  EditableControl,
  FormControl,
  Modal,
  QuestionOption,
} from "@/app/components"
import QuizBanner from "@/app/components/quiz_banner/QuizBanner"
import Link from "next/link"
import { useState } from "react"
import { AiFillDelete, AiOutlineArrowLeft } from "react-icons/ai"
import { Switch } from "@chakra-ui/react"

type Props = {}

const Quiz = (props: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [questionId, setQuestionId] = useState<string | null>(null)
  const [options, setOptions] = useState([
    {
      value: "Javascript",
      isAnswer: false,
    },
    {
      value: "Typescript",
      isAnswer: false,
    },
    {
      value: "React JS",
      isAnswer: false,
    },
  ])

  const handleAddMoreOption = () => {
    setOptions([...options, { value: "Add Option", isAnswer: false }])
  }

  return (
    <>
      <div className="w-full min-h-full pb-8">
        <div className="flex bg-white dark:bg-darkBg px-3 py-4 w-full items-center gap-4">
          <Link href="/">
            <AiOutlineArrowLeft className="text-xl cursor-pointer" />
          </Link>
          <h1 className="font-semibold">Quiz on javascript</h1>
        </div>

        <div className="w-[90%] mx-auto mt-12">
          <QuizBanner />

          <div className="mt-12 w-full max-w-[450px]">
            <h1 className="text-xl font-semibold mb-6">Questions</h1>
            <div className="w-full flex flex-col gap-4">
              <Accordian title="Which of the following lagnuage is developed by Microsoft?">
                <div className="bg-white dark:bg-secondary px-3 py-3 gap-4 grid grid-cols-2">
                  <QuestionOption index="" option="Javascript" />
                  <QuestionOption index="" option="Typescript" />
                  <QuestionOption index="" option="React" />
                  <QuestionOption index="" option="Next js" />
                </div>
                <div className="px-3 mt-2 flex justify-end w-fit ml-auto">
                  <Button
                    onClick={() => setModalOpen(true)}
                    className="py-2 px-4 w-fit"
                  >
                    Edit
                  </Button>
                </div>
              </Accordian>
            </div>
            <div className="mt-4">
              <Link href="/quiz/45/add-questions">
                <Button className="mr-auto">Add Questions</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Modal open={modalOpen} setModalOpen={setModalOpen}>
        <div className="mb-4 border-b pb-4">
          <h1 className="">Edit question</h1>
        </div>
        <div className="mb-8">
          <EditableControl
            className="font-semibold text-xl"
            title="What is full form of JS?"
          >
            <FormControl label="Question" />
          </EditableControl>
        </div>
        <div className="flex flex-col gap-4">
          {options.map((option) => (
            <EditableControl
              key={option.value}
              className="border px-2 py-3 rounded-lg text-lg"
              title={option.value}
              isDeleteButtonEnabled
              onDeleteClick={() => {}}
            >
              <div className="flex flex-col">
                <FormControl label="Option" />
                <div className="mt-2 flex items-center gap-4">
                  <label className="text-sm" htmlFor="">
                    Is Asnwer
                  </label>
                  <input className="bg-primary" type="radio" />
                </div>
              </div>
            </EditableControl>
          ))}
        </div>

        {options.length < 4 && (
          <div className="mt-2 flex justify-end">
            <span
              onClick={handleAddMoreOption}
              className="cursor-pointer hover:text-primary"
            >
              Add more options
            </span>
          </div>
        )}

        <Button className="mt-4 w-fit gap-2 bg-red-500 flex items-center">
          <>
            <AiFillDelete />
            <span>Delete</span>
          </>
        </Button>
      </Modal>
    </>
  )
}

export default Quiz
