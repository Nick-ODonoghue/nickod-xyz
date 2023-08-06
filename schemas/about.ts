export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "sectionHeading",
      title: "Section Heading",
      type: "string",
      description: "The heading of the section",
    },
    {
      name: "aboutIntro",
      title: "About Intro",
      type: "string",
      description: "The intro of the about section",
    },
    {
      name: "roleTitle",
      title: "Role Title",
      type: "string",
      description: "The title of the role",
    },
    {
      name: "rolePosition",
      title: "Role Position",
      type: "string",
      description: "The position of the role",
    },
    {
      name: "roleDates",
      title: "Role Dates",
      type: "string",
      description: "The dates of the role",
    },
    {
      name: "roleDescription",
      title: "Role Description",
      type: "string",
      description: "The description of the role",
    },
    {
      name: "roleTechStack",
      title: "Role Tech Stack",
      type: "array",
      description: "The tech stack used in the role",
    },
  ],
}
