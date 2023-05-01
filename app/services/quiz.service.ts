import { toast } from "react-hot-toast"
import api from "../config/axios"
import { ICreateQuizSchema } from "../validation/quiz"

interface ICreateQuiz extends ICreateQuizSchema {
  category: string | number
  creator: string | number
}

export interface ICreatQuizResponse {
  data: Data
  meta: Meta
}

export interface Data {
  id: number
  attributes: Attributes
}

export interface Attributes {
  title: string
  description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  isFeatured: boolean
}

export interface Meta {}

class QuizService {
  static async createQuiz(data: ICreateQuiz) {
    try {
      const response = await api.post<ICreatQuizResponse>("/quizzes", {
        data,
      })
      toast.success("Quiz created successfully")
      return response.data.data
    } catch (e: any) {
      toast.error(e.response.data.error.message)
      return null
    }
  }
}

export default QuizService
