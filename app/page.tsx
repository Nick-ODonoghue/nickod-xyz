import Intro from "./components/Intro"
import SectionAbout from "./components/SectionAbout"
import SectionProjects from "./components/SectionProjects"
import SectionTools from "./components/SectionTools"
import SectionContact from "./components/SectionContact"
import SectionFooter from "./components/SectionFooter"

export default function Home() {
  return (
    <>
      <Intro />
      <SectionProjects />
      <SectionAbout />
      <SectionTools />
      <SectionContact />
      <SectionFooter />
    </>
  )
}
