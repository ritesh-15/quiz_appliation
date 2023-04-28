import { DetailedHTMLProps } from "react"

interface Props
  extends DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string
  error?: string
}

const Textarea = ({ label, error, className, ...props }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="">{label}</label>

      <textarea
        className={`py-4 px-2 rounded-md bg-gray-100 dark:bg-secondary outline-none mt-2  focus-within:shadow-md w-full resize-none h-[150px] ${className}`}
        {...props}
      />

      {error && <small className="text-sm text-red-500 mt-1">{error}</small>}
    </div>
  )
}

export default Textarea
