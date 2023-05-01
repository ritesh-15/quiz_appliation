"use client"

import Link from "next/link"
import { AiOutlineArrowLeft } from "react-icons/ai"
import {
  FormControl,
  Textarea,
  ClientOnly,
  SelectBox,
  Button,
} from "../components"
import CategoryDTO from "../data/CategoryDto"
import { ChangeEvent, useState } from "react"
import { ISelectBoxOption } from "../components/select_box/SelectBox"
import { useFormik } from "formik"
import { CreateQuizSchema, ICreateQuizSchema } from "../validation/quiz"
import QuizService from "../services/quiz.service"
import { IUserInterface } from "../interfaces/UserInterface"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"

type Props = {
  categories: CategoryDTO[]
  user: IUserInterface
}

const CreateQuizClient = ({ categories, user }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<ISelectBoxOption>(
    categories[0]
  )

  const [loading, setLoading] = useState(false)
  const [cover, setCover] = useState<File | null>(null)
  const router = useRouter()

  const initialValues: ICreateQuizSchema = {
    title: "",
    description: "",
  }

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues,
    validationSchema: CreateQuizSchema,
    onSubmit: async (values) => {
      await handleCreateQuiz(values)
    },
  })

  const handleCreateQuiz = async (data: ICreateQuizSchema) => {
    try {
      setLoading(true)
      const quiz = await QuizService.createQuiz({
        category: selectedCategory.id,
        creator: user.data.id,
        ...data,
      })
      if (!quiz) throw new Error()
      router.push(`/quiz/${quiz?.id}`)
    } catch (e: any) {
      toast.error("Something went wrong at our side please try again!")
    } finally {
      setLoading(false)
    }
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files?.length) return
    setCover(files[0])
  }

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
          onSubmit={handleSubmit}
          className="bg-white dark:bg-darkBg p-4 rounded-lg shadow-lg w-full md:max-w-[450px]"
          action=""
        >
          <div className="mb-4">
            <FormControl
              onChange={handleChange}
              value={values.title}
              name="title"
              error={errors.title}
              className=""
              label="Quiz title"
            />
          </div>

          <div className="mb-4">
            <Textarea
              onChange={handleChange}
              value={values.description}
              name="description"
              error={errors.description}
              label="Description"
            />
          </div>

          <ClientOnly>
            <div className="w-full flex flex-col relative mb-4">
              <label className="mb-2 block" htmlFor="">
                Choose category for quiz
              </label>
              <SelectBox
                selected={selectedCategory}
                setSelected={setSelectedCategory}
                options={categories}
              />
            </div>
          </ClientOnly>

          {cover && (
            <div className="mb-4">
              <img
                className="w-full h-48 object-cover"
                src={URL.createObjectURL(cover)}
                alt=""
              />
            </div>
          )}

          <div className="mb-4">
            <label
              className="px-2 py-3 cursor-pointer w-fit rounded-md border border-primary text-primary mx-auto block"
              htmlFor="file"
            >
              Choose cover photo
            </label>
            <input
              onChange={handleImageChange}
              type="file"
              accept="image/*"
              className="hidden"
              id="file"
            />
          </div>

          <Button type="submit" loading={loading} className="mt-4 w-full">
            Create quiz and continue
          </Button>
        </form>
      </div>
    </div>
  )
}

export default CreateQuizClient
