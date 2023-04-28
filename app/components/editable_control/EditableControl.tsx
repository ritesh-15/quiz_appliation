"use client"

import { ReactNode, useState } from "react"
import { AiOutlineCheck, AiOutlineClose, AiOutlineDelete } from "react-icons/ai"
import { BsCheckCircle } from "react-icons/bs"
import { FiEdit2 } from "react-icons/fi"

type Props = {
  children: ReactNode
  title: string
  className?: string
  onDeleteClick?: () => void
  onUpdateClick?: () => void
  isDeleteButtonEnabled?: boolean
}

const EditableControl = ({
  children,
  title,
  onDeleteClick,
  onUpdateClick,
  className,
  isDeleteButtonEnabled,
}: Props) => {
  const [edit, setEdit] = useState(false)

  return (
    <div className="">
      {edit ? (
        <div className={`flex items-center gap-4 justify-between ${className}`}>
          <div className="w-full">{children}</div>
          <div className="flex justify-start items-center gap-4">
            <BsCheckCircle
              onClick={onUpdateClick}
              className="text-xl cursor-pointer"
            />
            <AiOutlineClose
              onClick={() => setEdit(false)}
              className="text-xl cursor-pointer"
            />
          </div>
        </div>
      ) : (
        <div className={`flex items-center justify-between gap-2 ${className}`}>
          <h1 className="">{title}</h1>
          <div className="flex items-center gap-4">
            <FiEdit2
              onClick={() => setEdit(true)}
              className="text-xl cursor-pointer"
            />
            {isDeleteButtonEnabled && onDeleteClick && (
              <AiOutlineDelete
                onClick={onDeleteClick}
                className="text-xl cursor-pointer"
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default EditableControl
