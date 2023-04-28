import { Sidebar } from "../components"

type Props = {
  children: React.ReactNode
}

const layout = ({ children }: Props) => {
  return (
    <section className="flex h-screen overflow-y-hidden bg-white dark:bg-darkBg">
      <Sidebar />
      <main className="w-full min-h-screen overflow-y-auto">{children}</main>
    </section>
  )
}

export default layout
