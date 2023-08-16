import { getBlog, getSiteIntro } from "@/app/lib/getSanityData"
import { Blog, SiteIntro } from "@/app/lib/interface"
import { urlFor } from "@/app/lib/sanityImageUrl"
import { ImageResponse } from "next/server"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "About Acme"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/jpg"

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const blogPost = (await getBlog(params.slug)) as Blog
  const author = (await getSiteIntro()) as SiteIntro[]

  return new ImageResponse(
    (
      <div tw='relative flex w-full h-full flex items-end p-8'>
        {/* Background */}
        <div tw='absolute flex inset-0'>
          <img tw='flex flex-1' src={urlFor(blogPost?.image.asset._ref).url()} alt={alt} />
          {/* Overlay */}
          <div tw='absolute flex inset-0 bg-black bg-opacity-60' />
        </div>
        <div tw='flex flex-col items-start text-neutral-50'>
          {/* Title */}
          <div tw='text-7xl font-bold'>{blogPost?.title}</div>
          <div tw='text-3xl font-bold'>{blogPost?.overview}</div>
          {author.map((item) => (
            <div key={item._id} tw='text-3xl font-bold mt-4'>
              {item.siteAuthor}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  )
}
