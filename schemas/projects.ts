export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "sectionHeading",
      title: "Section Heading",
      type: "string",
      description: "The heading of the section",
    },
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string",
      description: "The title of the project",
    },
    {
      name: "projectOverview",
      title: "Project Overview",
      type: "string",
      description: "Overview of the project",
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      description: "The tech stack used in the project",
    },
    {
      name: "projectLinks",
      title: "Project Links",
      type: "array",
      description: "The links for the project",
    },
    {
      name: "projectImage",
      title: "Project Image",
      type: "image",
      description: "Screenshot of the project",
    },
  ],
}
