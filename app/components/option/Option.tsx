type Props = {
  index: string
  option: string
}

const QuestionOption = ({ index, option }: Props) => {
  return (
    <div className="flex gap-2 items-center border px-3 py-4 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-darkBg">
      <span>{index}</span>
      <span>{option}</span>
    </div>
  )
}

export default QuestionOption
