import Image from "next/image"

type Props = {}

const Quiz = (props: Props) => {
  return (
    <div className="w-full md:max-w-[350px] bg-white dark:bg-secondary rounded-lg overflow-hidden hover:shadow-xl cursor-pointer">
      <div className="relative w-full h-[250px]">
        <Image
          src="https://images.unsplash.com/photo-1682588942214-10758e7313ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
          alt=""
          fill
          className="object-cover rounded-lg after:bg-[rgba(0,0,0,0.9)]"
        />
      </div>

      <div className="mt-2 p-3">
        <h1 className="text-xl font-bold">Quiz on Javascript</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          voluptates.
        </p>
      </div>
    </div>
  )
}

export default Quiz
