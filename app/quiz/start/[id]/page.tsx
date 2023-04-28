import { Button, QuestionOption } from "@/app/components"
import Link from "next/link"
import { AiOutlineArrowLeft } from "react-icons/ai"

type Props = {}

const StartQuiz = (props: Props) => {
  return (
    <div className="w-full min-h-full pb-8">
      <div className="flex bg-white dark:bg-darkBg px-3 py-4 w-full items-center gap-4">
        <Link href="/">
          <AiOutlineArrowLeft className="text-xl cursor-pointer" />
        </Link>
        <h1 className="font-semibold">Quiz on javascript</h1>
      </div>

      <div className="w-full max-w-[550px] mt-12 mx-auto">
        <div className="flex gap-4 items-center">
          <span className="font-semibold">Questions</span>
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-primary text-xl">12</span>
            <span>/30</span>
          </div>
        </div>

        <div className="flex flex-col gap-12 mt-8">
          <div className="bg-white dark:bg-secondary shadow-lg p-4 rounded-lg">
            <h1 className="text-xl font-semibold select-none">
              What is full form of JS?
            </h1>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <QuestionOption index="" option="Javascript" />
              <QuestionOption index="" option="Typescript" />
              <QuestionOption index="" option="React" />
              <QuestionOption index="" option="Next" />
            </div>
          </div>

          <div className="bg-white dark:bg-secondary shadow-lg p-4 rounded-lg">
            <h1 className="text-xl font-semibold select-none">
              What is full form of JS?
            </h1>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <QuestionOption index="" option="Javascript" />
              <QuestionOption index="" option="Typescript" />
              <QuestionOption index="" option="React" />
              <QuestionOption index="" option="Next" />
            </div>
          </div>
        </div>

        <Button className="mt-12 w-full">Submit</Button>
      </div>
    </div>
  )
}

export default StartQuiz
