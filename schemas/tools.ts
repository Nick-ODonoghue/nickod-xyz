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
    // subsection title, with array of words inside it
    {
      name: "toolsSubsection",
      title: "Tools Subsection",
      type: "array",
      description: "The subsection of the tools section",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "subsectionTitle",
              title: "Subsection Title",
              type: "string",
              description: "The title of the subsection",
            },
          ],
        },
      ],
    },
  ],
}
