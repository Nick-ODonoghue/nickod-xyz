// import { client } from "../lib/sanity"
// import { groq } from "next-sanity"
import Link from "next/link"
import { SiteIntro } from "../lib/interface"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { urlFor } from "../lib/sanityImageUrl"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { getData } from "../lib/getSanityData"

const myPortableTextComponent = {
  types: {
    image: ({ value }: { value: any }) => {
      return (
        <Image src={urlFor(value.asset._ref).url()} alt={value.alt} className=' rounded-xl' width={360} height={360} />
      )
    },
  },
}

export default async function Intro() {
  const data = (await getData()) as SiteIntro[]

  if (!data) return <div>Loading...</div>

  return (
    <section>
      {data.map((item) => (
        <div key={item._id}>
          <div>
            <PortableText value={item.authorBio} components={myPortableTextComponent} />
          </div>
          <div className=' flex flex-row'>
            <Link href={item.socialLinks[0]} target='_blank'>
              <AiFillLinkedin className='' />
            </Link>
            <Link href={item.socialLinks[1]} target='_blank'>
              <AiFillGithub className='' />
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}
