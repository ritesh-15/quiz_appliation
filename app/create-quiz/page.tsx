import { ClientOnly, EmptyState } from "../components"
import { getCurrentUser } from "../utils/auth.utils"
import CategoryService from "../services/categories.service"
import CreateQuizClient from "./CreateQuizClient"

type Props = {}

const CreateQuiz = async (props: Props) => {
  const session = await getCurrentUser()
  const categories = await CategoryService.getAllCategories()

  if (!session)
    return (
      <>
        <EmptyState
          title="You are not allowed here!"
          description="Please login to continue"
          actionText="Login to continue"
          actionURL="/login"
        />
      </>
    )

  return (
    <ClientOnly>
      <CreateQuizClient user={session} categories={categories} />
    </ClientOnly>
  )
}

export default CreateQuiz
