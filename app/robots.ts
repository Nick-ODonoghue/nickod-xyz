import { MetadataRoute } from "next"
import { getSiteMetadata } from "./lib/getSanityData"
import { Metadata } from "./lib/interface"

export default async function robots(): Promise<MetadataRoute.Robots> {
  const url = (await getSiteMetadata()) as Metadata

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${url}sitemap.xml`,
  }
}
