import { ReactNode } from "react"
import { AiOutlineClose } from "react-icons/ai"

type Props = {
  children: ReactNode
  setModalOpen: (open: boolean) => void
  open: boolean
}

const Modal = ({ children, setModalOpen, open }: Props) => {
  return (
    <div
      className={`h-screen overflow-hidden bg-[rgba(0,0,0,0.25)] z-50 fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center transition-all ${
        open ? "opacity-1 pointer-events-auto" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="bg-white dark:bg-secondary overflow-y-auto max-h-[650px] p-4 shadow-lg rounded-lg w-full max-w-[550px] mx-auto relative">
        <div
          onClick={() => setModalOpen(false)}
          className="absolute top-1 right-1 p-2 cursor-pointer bg-[rgba(0,0,0,0.25)] rounded-full"
        >
          <AiOutlineClose className="" />
        </div>

        {children}
      </div>
    </div>
  )
}

export default Modal
