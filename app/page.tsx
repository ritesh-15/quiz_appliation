import {
  Button,
  ClientOnly,
  EmptyState,
  Quiz,
  QuizBanner,
  Sidebar,
} from "./components"
import { BsSearch } from "react-icons/bs"
import Link from "next/link"
import { getCurrentUser } from "./utils/auth.utils"
import CategoryService from "./services/categories.service"

export default async function Home() {
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
    <main className="flex h-screen overflow-y-hidden bg-white dark:bg-darkBg">
      <Sidebar />

      <main className="w-full min-h-screen overflow-y-auto">
        <section className="py-4 px-4">
          <div className="flex justify-end gap-4 mb-8">
            <div className="flex items-center shadow-lg bg-white dark:bg-secondary px-4 py-3 rounded-lg w-full max-w-[350px] gap-4">
              <BsSearch className="text-2xl" />
              <input
                type="text"
                className="outline-none bg-transparent w-full"
                placeholder="search for quizes..."
              />
            </div>

            <Link href="/create-quiz">
              <Button className="w-fit">Create a quiz</Button>
            </Link>
          </div>

          <div className="w-full max-w-[90%] mx-auto">
            <QuizBanner />

            <div className="mt-12">
              <h1 className="text-xl font-semibold">Categories</h1>
              <div className="flex flex-wrap mt-4 gap-4">
                {categories.map(({ id, name }) => (
                  <div
                    key={id}
                    className="bg-gray-200 dark:bg-secondary px-3 py-3 rounded-lg cursor-pointer"
                  >
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              <Quiz />
              <Quiz />
              <Quiz />
              <Quiz />
              <Quiz />
              <Quiz />
              <Quiz />
            </div>
          </div>
        </section>
      </main>
    </main>
  )
}
