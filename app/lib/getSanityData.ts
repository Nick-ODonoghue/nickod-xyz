import { groq } from "next-sanity"
import { client } from "./sanity"

export async function getSiteIntro() {
  const query = groq`*[_type == "siteIntro"]`
  const data = await client.fetch(query)
  return data
}

export async function getNavData() {
  const query = groq`*[_type == "navbarLinks"] | order(order asc)`
  const data = await client.fetch(query)
  return data
}
