import Image from "next/image"
import Button from "../button/Button"
import Link from "next/link"

type Props = {}

const QuizBanner = (props: Props) => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 min-h-[300px]">
      <div className="flex flex-col justify-end max-w-[450px]">
        <h1 className="text-3xl font-bold w-full leading-relaxed">
          Quiz on Javascript Promises
        </h1>
        <div className="flex mt-4 gap-6 flex-wrap">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-xl">10</p>
            <span className="font-light">Questions</span>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-xl">300</p>
            <span className="font-light">Attempted</span>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-xl">30 min</p>
            <span className="font-light">Time</span>
          </div>
        </div>

        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          explicabo.
        </p>

        <Link href="/quiz/start/74">
          <Button className="mt-4 w-full">Start Quiz</Button>
        </Link>
      </div>

      <div className="relative w-full md:min-h-full h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1682588942214-10758e7313ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
          alt=""
          fill
          className="object-cover rounded-lg after:bg-[rgba(0,0,0,0.9)]"
        />
      </div>
    </div>
  )
}

export default QuizBanner
