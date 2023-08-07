import { Image } from "sanity"

export interface NavbarLinks {
  title: string
  href: string
  _id: string
}

export interface SiteIntro {
  siteTitle: string
  siteAuthor: string
  siteAuthorNickname: string
  authorBio: any
  siteMetaDataDescription: string
  socialLinks: string
  _id: string
}

export interface Projects {
  sectionHeading: string
  projectTitle: string
  projectOverview: string
  techStack: { tech: string }[]
  projectLink: { link: string; type: string }[]
  projectImage: {
    asset: {
      _ref: string
      _type: string
    }
  }
  _id: string
}
