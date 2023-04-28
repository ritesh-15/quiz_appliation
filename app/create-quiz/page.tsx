import Link from "next/link"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Button, FormControl, Textarea } from "../components"

type Props = {}

const CreateQuiz = (props: Props) => {
  return (
    <div className="w-full min-h-full">
      <div className="flex bg-white dark:bg-darkBg px-3 py-4 w-full items-center gap-4">
        <Link href="/">
          <AiOutlineArrowLeft className="text-xl cursor-pointer" />
        </Link>
        <h1 className="font-semibold">Create a new quiz</h1>
      </div>

      <div className="flex items-center justify-center mt-12">
        <form
          className="bg-white dark:bg-darkBg p-4 rounded-lg shadow-lg w-full md:max-w-[450px]"
          action=""
        >
          <div className="mb-4">
            <FormControl className="" label="Quiz title" />
          </div>

          <div className="mb-4">
            <Textarea label="Description" />
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="">Choose category for quiz</label>
            <select
              className="mt-2 cursor-pointer w-full px-2 py-3 bg-gray-100 dark:bg-secondary"
              name=""
              id=""
            >
              <option className="" value="javascript">
                Javascript
              </option>
              <option className="" value="typescript">
                Typescript
              </option>
              <option className="" value="reactjs">
                React JS
              </option>
            </select>
          </div>

          <Button className="mt-4 w-full">Create quiz and continue</Button>
        </form>
      </div>
    </div>
  )
}

export default CreateQuiz
