"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { SunIcon } from "@heroicons/react/20/solid"
import { MoonIcon } from "@heroicons/react/24/solid"

export default function ThemeButton() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setmounted] = useState(false)

  useEffect(() => {
    setmounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme === "dark" ? <SunIcon className='w-6 h-6' /> : <MoonIcon className='w-6 h-6' />}
    </button>
  )
}
