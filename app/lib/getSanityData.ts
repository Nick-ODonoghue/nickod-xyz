import { groq } from "next-sanity"
import { client } from "./sanity"

export async function getData() {
  const query = groq`*[_type == "siteIntro"]`
  const data = await client.fetch(query)
  return data
}
