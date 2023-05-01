import { EmptyState, Sidebar } from "../components"
import { getCurrentUser } from "../utils/auth.utils"

type Props = {
  children: React.ReactNode
}

const layout = async ({ children }: Props) => {
  const session = await getCurrentUser()

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
    <section className="flex h-screen overflow-y-hidden bg-white dark:bg-darkBg">
      <Sidebar />
      <main className="w-full min-h-screen overflow-y-auto">{children}</main>
    </section>
  )
}

export default layout
