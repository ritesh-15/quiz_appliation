import Image from "next/image"
import Link from "next/link"
import Button from "../button/Button"

type Props = {
  title: string
  description: string
  actionText: string
  actionURL: string
}

const EmptyState = ({ title, description, actionText, actionURL }: Props) => {
  return (
    <main className="min-h-screen w-full">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[350px] h-[300px] relative">
          <Image
            className="object-contain"
            fill
            alt=""
            src="/images/not_found.png"
          />
        </div>
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="font-light mt-2">{description}</p>
        <Link className="mt-4 inline-block" href={actionURL}>
          <Button>{actionText}</Button>
        </Link>
      </div>
    </main>
  )
}

export default EmptyState
