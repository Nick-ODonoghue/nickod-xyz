import ProjectCard from "./ProjectCard"
import { Projects } from "../lib/interface"
import { getProjectData } from "../lib/getSanityData"

export default async function SectionProjects() {
  const projectData = (await getProjectData()) as Projects[]

  if (!projectData) return <div>Loading...</div>

  return (
    <>
      <h2>.projects()</h2>
      <section>
        <ProjectCard projectData={projectData} />
      </section>
    </>
  )
}
