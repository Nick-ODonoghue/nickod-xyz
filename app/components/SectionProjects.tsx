import ProjectCard from "./ProjectCard"
import { groq } from "next-sanity"
import { client } from "../lib/sanity"
import { Projects } from "../lib/interface"

async function getData() {
  const query = groq`*[ _type == "projects"]`
  const data = await client.fetch(query)
  return data as Projects[]
}

export default async function SectionProjects() {
  const data = (await getData()) as Projects[]

  return (
    <>
      <h2>.projects()</h2>
      <section>
        <ProjectCard data={data} />
      </section>
    </>
  )
}
