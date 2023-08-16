import { getAllBlogData, getSiteMetadata } from "./lib/getSanityData"
import { Blog, Metadata } from "./lib/interface"

export default async function sitemap(): Promise<{ url: string; lastModified?: string | Date | undefined }[]> {
  const url = (await getSiteMetadata()) as Metadata
  const blogPosts = (await getAllBlogData()) as Blog[]

  const blogUrl =
    blogPosts.map((post) => {
      return {
        url: `${url.siteUrl}/blog/${post.slug.current}`,
        lastModified: post.createdAt,
      }
    }) ?? []

  return [
    {
      url: `${url.siteUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${url.siteUrl}/blog`,
      lastModified: new Date(),
    },
    ...blogUrl,
  ]
}
