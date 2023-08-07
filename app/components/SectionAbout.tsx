import CardAbout from "./CardAbout"
import { groq } from "next-sanity"
import { client } from "../lib/sanity"
import { About } from "../lib/interface"

async function getData() {
  const query = groq`*[ _type == "about"]`
  const data = await client.fetch(query)
  return data
}

export default async function SectionAbout() {
  const data = (await getData()) as About[]

  if (!data) return <div>Loading...</div>

  return (
    <>
      <h2>.about()</h2>
      <section>
        <CardAbout data={data} />
      </section>
    </>
  )
}
