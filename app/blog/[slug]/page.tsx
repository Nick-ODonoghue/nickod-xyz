import { getBlog } from "@/app/lib/getSanityData"
import { Blog } from "@/app/lib/interface"

import { PortableText } from "@portabletext/react"
import { urlFor } from "@/app/lib/sanityImageUrl"
import Image from "next/image"

export default async function page({ params }: { params: { slug: string } }) {
  const blog = (await getBlog(params.slug)) as Blog

  const myPortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => {
        return (
          <Image
            src={urlFor(value.asset._ref).url()}
            alt={value.alt}
            className=' rounded-xl'
            width={360}
            height={360}
          />
        )
      },
    },
  }

  return (
    <>
      <h1>{blog.title}</h1>
      <div>
        <PortableText value={blog.content} components={myPortableTextComponent} />
      </div>
    </>
  )
}
