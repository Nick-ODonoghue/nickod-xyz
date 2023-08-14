import { getBlog } from "@/app/lib/getSanityData"
import { Blog } from "@/app/lib/interface"

import { PortableText } from "@portabletext/react"
import { urlFor } from "@/app/lib/sanityImageUrl"
import Image from "next/image"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const blog = (await getBlog(params.slug)) as Blog
    if (!blog)
      return {
        title: "Blog not found",
        description: "Blog not found",
      }
    return {
      title: blog.title,
      description: blog.overview,
      alternates: {
        canonical: `/blog/${blog.slug.current}`,
      },
    }
  } catch (error) {
    return {
      title: "Blog not found",
      description: "Blog not found",
    }
  }
}

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
