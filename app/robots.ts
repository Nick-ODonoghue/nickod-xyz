import { MetadataRoute } from "next"
import { getSiteMetadata } from "./lib/getSanityData"
import { Metadata } from "./lib/interface"

export default async function robots(): Promise<MetadataRoute.Robots> {
  const meta = (await getSiteMetadata()) as Metadata

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${meta.siteUrl}sitemap.xml`,
  }
}
