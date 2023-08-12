import { About } from "../lib/interface"

interface CardAboutProps {
  aboutData: About[]
}

export default function CardAbout({ aboutData }: CardAboutProps) {
  return (
    <>
      {aboutData.map((about) => (
        <div key={about._id}>
          <h3>{about.roleTitle}</h3>
          <h4>{about.rolePosition}</h4>
          <h5>{about.roleDates}</h5>
          <p>{about.roleDescription}</p>
          <ul>
            {about.roleTechStack.map((stackItem, index) => (
              <li key={index}>{stackItem.tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
