export default {
  name: "siteData",
  title: "Site Data",
  type: "document",
  fields: [
    {
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      description: "The title of the site",
    },
    {
      name: "siteAuthor",
      title: "Site Author",
      type: "string",
      description: "The author of the site",
    },
    {
      name: "authorBio",
      title: "Author Bio",
      type: "array",
      description: "The bio of the author",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative Text",
            },
          ],
        },
      ],
    },
    {
      name: "siteMetaDataDescription",
      title: "Site Meta Data Description",
      type: "text",
      description: "The meta data description of the site",
    },
  ],
}
