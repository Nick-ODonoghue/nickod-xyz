export default {
  name: "siteIntro",
  title: "Site Intro",
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
      name: "siteAuthorNickname",
      title: "Site Author Nickname",
      type: "string",
      description: "The authors nickname",
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
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      description: "The social links of the author",
      of: [
        {
          type: "url",
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
