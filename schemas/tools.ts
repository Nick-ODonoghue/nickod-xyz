export default {
  name: "tools",
  title: "Tools",
  type: "document",
  fields: [
    {
      name: "sectionHeading",
      title: "Section Heading",
      type: "string",
      description: "The heading of the section",
    },
    {
      name: "toolsIntro",
      title: "Tools Intro",
      type: "string",
      description: "The intro of the tools section",
    },
    {
      name: "frontendTools",
      title: "Frontend Tools",
      type: "array",
      description: "The frontend tools you used",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "tool",
              title: "Tool Name",
              type: "string",
              description: "The name of the frontend tool",
            },
          ],
        },
      ],
    },
    {
      name: "backendTools",
      title: "Backend Tools",
      type: "array",
      description: "The backend tools you used",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "tool",
              title: "Tool Name",
              type: "string",
              description: "The name of the backend tool",
            },
          ],
        },
      ],
    },
    {
      name: "otherTools",
      title: "Other Tools",
      type: "array",
      description: "Other tools you used",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "tool",
              title: "Tool Name",
              type: "string",
              description: "The name of the other tool",
            },
          ],
        },
      ],
    },
  ],
}
