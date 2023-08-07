import { Projects } from "../lib/interface"
import Image from "next/image"
import { urlFor } from "@/app/lib/sanityImageUrl"

interface ProjectCardProps {
  data: Projects[]
}

export default function Project({ data }: ProjectCardProps) {
  return (
    <>
      {data.map((project) => (
        <div key={project._id}>
          <div className='relative overflow-hidden rounded-md group mb-2'>
            <Image
              src={urlFor(project.projectImage.asset._ref).url() as string}
              alt={project.projectTitle}
              width={1920}
              height={1080}
            />
            <div className='absolute h-full w-full bg-black/90 flex items-center justify-center bottom-full group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-md px-2'>
              <p className='text-white font-medium text-center'>{project.projectOverview}</p>
            </div>
          </div>
          <div>
            <h3>{project.projectTitle}</h3>
          </div>
          <div>
            <h4>Tech Stack</h4>
            <ul>
              {project.techStack.map((stackItem, index) => (
                <li key={index}>{stackItem.tech}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Links</h4>
            <ul>
              {project.projectLink.map((linkItem, index) => (
                <li key={index}>
                  <a href={linkItem.link} target='_blank' rel='noreferrer'>
                    {linkItem.type}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}
