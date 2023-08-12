import CardAbout from "./CardAbout"
import { About } from "../lib/interface"
import { getAboutData } from "../lib/getSanityData"

export default async function SectionAbout() {
  const aboutData = (await getAboutData()) as About[]

  if (!aboutData) return <div>Loading...</div>

  return (
    <>
      <h2>.about()</h2>
      <section>
        <CardAbout aboutData={aboutData} />
      </section>
    </>
  )
}
