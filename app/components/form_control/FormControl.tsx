import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react"

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
  error?: string
}

const FormControl = ({ label, error, className, ...props }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="">{label}</label>

      <input
        className={`py-4 px-2 dark:bg-secondary rounded-md bg-gray-100 outline-none mt-2  focus-within:shadow-md ${className}`}
        {...props}
      />

      {error && <small className="text-sm text-red-500 mt-1">{error}</small>}
    </div>
  )
}

export default FormControl
