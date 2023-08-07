export default {
  name: "projects",
  title: "Projects",
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
      of: [
        {
          type: "object",
          fields: [
            {
              name: "tech",
              title: "Tech",
              type: "string",
              description: "The tech used in the project",
            },
          ],
        },
      ],
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "array",
      description: "The links to the project",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "link",
              title: "Link",
              type: "string",
              description: "The url of the link",
            },
            {
              name: "type",
              title: "Type",
              type: "string",
              description: "The type of link (e.g. 'Live Site', 'Github')",
            },
          ],
        },
      ],
    },
    {
      name: "projectImage",
      title: "Project Image",
      type: "image",
      description: "Screenshot of the project",
    },
  ],
}
