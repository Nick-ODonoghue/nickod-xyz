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
      <div className='py-6 px-3 flex place-content-between sticky top-0 z-50 bg-white/90 dark:bg-black/90 '>
        <Link href='/'>
          <h2>{siteTitle}</h2>
        </Link>
        <Navbar />
        <ThemeButton />
      </div>
    </>
  )
}
