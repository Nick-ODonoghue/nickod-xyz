export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "copyRightText",
      title: "Footer Copyright Symbol",
      type: "string",
      description: "Copy right symbol in the footer",
    },
    {
      name: "footerText",
      title: "Footer Text",
      type: "string",
      description: "The text of your footer",
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
              name: "linkText",
              title: "Link Text",
              type: "string",
              description: "The link text",
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
