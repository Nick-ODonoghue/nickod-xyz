export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "footerText",
      title: "Footer Text",
      type: "string",
      description: "The text in the footer",
    },
    {
      name: "footerTextBottom",
      title: "Footer Text Bottom",
      type: "string",
      description: "The text at the bottom of your footer",
    },
    {
      name: "footerLinks",
      title: "Footer Links",
      type: "array",
      description: "The links in the footer",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "link",
              title: "Link",
              type: "string",
              description: "The link in the footer",
            },
            {
              name: "href",
              title: "URL",
              type: "string",
              description: "The URL of the link",
            },
          ],
        },
      ],
    },
    {
      name: "footerEmoji",
      title: "Footer Emoji",
      type: "string",
      description: "The emoji in the footer",
    },
  ],
}
