import Link from "next/link"
import ThemeButton from "./ThemeButton"
import Navbar from "./Navbar"

export default function Header() {
  return (
    <>
      <div className=' flex place-content-between'>
        <Link href='/'>
          <h1>NickOD.xyz</h1>
        </Link>
        <Navbar />
        <ThemeButton />
      </div>
    </>
  )
}
