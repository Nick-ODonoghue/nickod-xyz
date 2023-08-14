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

export async function getProjectData() {
  const query = groq`*[ _type == "projects"]`
  const data = await client.fetch(query)
  return data
}

export async function getAboutData() {
  const query = groq`*[ _type == "about"]`
  const data = await client.fetch(query)
  return data
}

export async function getToolsData() {
  const query = groq`*[ _type == "tools"]`
  const data = await client.fetch(query)
  return data
}

export async function getFooterData() {
  const query = groq`*[ _type == "footer"]`
  const data = await client.fetch(query)
  return data
}

export async function getAllBlogData() {
  const query = groq`*[_type == "blog"]`
  const data = await client.fetch(query)
  return data
}

export async function getBlog(slug: string) {
  const query = groq`*[_type == "blog" && slug.current == "${slug}"][0]`
  const data = await client.fetch(query)
  return data
}

export async function getSiteMetadata() {
  const query = groq`*[_type == "metadata"]`
  const data = await client.fetch(query)
  return data
}
