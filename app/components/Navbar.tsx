"use client"

import Link from "next/link"
import { NavbarLinks } from "../lib/interface"
import { getNavData } from "../lib/getSanityData"

export default async function Navbar() {
  const navData = (await getNavData()) as NavbarLinks[]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth",
    })
  }

  if (!navData) return <div>Loading...</div>

  return (
    <>
      <ul className=' flex space-x-10'>
        {navData.map((link) => (
          <li key={link._id}>
            <Link href={link.href} onClick={handleScroll}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
