"use client"

import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { AiOutlineDown, AiOutlineCheck } from "react-icons/ai"

export interface ISelectBoxOption {
  id: number | string
  name: string
}

interface Props {
  options: ISelectBoxOption[]
  selected: ISelectBoxOption
  setSelected: (selected: ISelectBoxOption) => void
}

export default function SelectBox({ options, selected, setSelected }: Props) {
  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="w-full bg-gray-100 py-3 px-2 roundd-md flex items-center justify-between cursor-pointer">
            <span className="truncate block">{selected.name}</span>
            <AiOutlineDown className="text-xl" aria-hidden="true" />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="bg-white absolute rounded-md left-0 right-0 max-h-60 overflow-y-auto mt-1 dark:bg-secondary shadow-lg flex flex-col">
              {options.map((option) => (
                <Listbox.Option
                  className="hover:bg-primary hover:text-white transition-all py-3 cursor-pointer px-3"
                  key={option.id}
                  value={option}
                >
                  {option.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
