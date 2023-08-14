import { PortableTextBlock } from "sanity"

export interface NavbarLinks {
  title: string
  href: string
  _id: string
}

export interface SiteIntro {
  siteTitle: string
  siteAuthor: string
  siteAuthorNickname: string
  authorBio: PortableTextBlock[]
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

export interface About {
  aboutIntro: string
  roleTitle: string
  rolePosition: string
  roleDates: string
  roleDescription: string
  roleTechStack: { tech: string }[]
  _id: string
}

export interface Tools {
  sectionHeading: string
  toolsIntro: string
  frontendTools: { tool: string }[]
  backendTools: { tool: string }[]
  otherTools: { tool: string }[]
  _id: string
}

export interface Footer {
  copyRightText: string
  footerText: string
  footerLinks: { link: string; href: string }[]
  footerEmoji: string
  _id: string
}

export interface Blog {
  title: string
  overview: string
  slug: {
    current: string
  }
  createdAt: string
  content: PortableTextBlock[]
  _id: string
}

export interface Metadata {
  title: string
  description: string
  keywords: string[]
  ogTitle: string
  ogDescription: string
  ogImage: {
    asset: {
      _ref: string
      _type: string
    }
  }
  ogUrl: string
  twitterTitle: string
  twitterDescription: string
  twitterImage: {
    asset: {
      _ref: string
      _type: string
    }
  }
  twitterUrl: string
  _id: string
}
