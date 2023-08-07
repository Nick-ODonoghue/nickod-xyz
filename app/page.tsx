import Intro from "./components/Intro"
import SectionAbout from "./components/SectionAbout"
import SectionProjects from "./components/SectionProjects"

export default function Home() {
  return (
    <>
      <Intro />
      <SectionProjects />
      <SectionAbout />
    </>
  )
}
