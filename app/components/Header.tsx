import Link from "next/link"
import ThemeButton from "./ThemeButton"
import Navbar from "./Navbar"
import { getSiteIntro } from "../lib/getSanityData"
import { SiteIntro } from "../lib/interface"

export default async function Header() {
  const data = (await getSiteIntro()) as SiteIntro[]
  const siteTitle = data[0].siteTitle

  return (
    <>
      <div className=' flex place-content-between'>
        <Link href='/'>
          <h1>{siteTitle}</h1>
        </Link>
        <Navbar />
        <ThemeButton />
      </div>
    </>
  )
}
