import Link from "next/link"
import { NavbarLinks } from "../lib/interface"
import { getNavData } from "../lib/getSanityData"

export default async function Navbar() {
  const navData = (await getNavData()) as NavbarLinks[]

  if (!navData) return <div>Loading...</div>

  return (
    <>
      <ul className=' flex space-x-10'>
        {navData.map((link) => (
          <li key={link._id}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
