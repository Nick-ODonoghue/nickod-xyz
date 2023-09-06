"use client"
import { useState } from "react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <button
        onClick={toggleMenu}
        className='flex flex-col justify-center items-center fixed bottom-5 right-5 px-3 z-50 '
      >
        <span
          className={`bg-red-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
        ></span>
        <span
          className={`bg-red-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`bg-red-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
        ></span>
      </button>
    </>
  )
}
