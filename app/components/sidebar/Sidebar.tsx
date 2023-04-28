import Link from "next/link"
import { AiFillHome, AiOutlineHome } from "react-icons/ai"
import { BsHddStack, BsMoon } from "react-icons/bs"
import { CiLogout, CiUser } from "react-icons/Ci"
import { IoMoonOutline } from "react-icons/io5"

type Props = {}

const style = {
  li: "flex gap-4 items-center cursor-pointer hover:bg-darkBg px-4 py-4 rounded-xl text-white",
}

const Sidebar = (props: Props) => {
  return (
    <div className="w-full max-w-[200px] px-4 py-4 flex flex-col justify-between bg-secondary ">
      <Link href="/">
        <h1 className="text-xl font-bold text-white cursor-pointer">
          👽 Devquiz
        </h1>
      </Link>

      <ul className="flex flex-col gap-4">
        <Link href="/" className="">
          <li className={`${style.li} bg-primary hover:bg-primary text-white`}>
            {true ? (
              <AiFillHome className="text-2xl" />
            ) : (
              <AiOutlineHome className="text-2xl" />
            )}
            <span>Home</span>
          </li>
        </Link>

        <li className={`${style.li}`}>
          <BsHddStack className="text-2xl" />
          <span>My Quizes</span>
        </li>
        <li className={`${style.li}`}>
          <CiUser className="text-2xl" />
          <span>Profile</span>
        </li>
        <li className={style.li}>
          <IoMoonOutline className="text-2xl" />
          <span>Dark</span>
        </li>
        <li className={style.li}>
          <CiLogout className="text-2xl" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
