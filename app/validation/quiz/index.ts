import * as y from "yup"

export const CreateQuizSchema = y.object({
  title: y.string().trim().required("quiz title should be provided"),
  description: y
    .string()
    .trim()
    .required("quiz description should be provided"),
})

export type ICreateQuizSchema = y.InferType<typeof CreateQuizSchema>
