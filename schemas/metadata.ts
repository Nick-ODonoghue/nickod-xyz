export default {
  name: "metadata",
  title: "Metadata",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
      description: "The title of your site",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "The description of your site",
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      description: "The keywords of your site",
      of: [{ type: "string" }],
    },
    {
      name: "ogTitle",
      title: "Open Graph Title",
      type: "string",
      description: "The title of your site for social media",
    },
    {
      name: "ogDescription",
      title: "Open Graph Description",
      type: "text",
      description: "The description of your site for social media",
    },
    {
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      description: "The image of your site for social media",
    },
    {
      name: "ogUrl",
      title: "Open Graph URL",
      type: "url",
      description: "The URL of your site for social media",
    },
    {
      name: "twitterTitle",
      title: "Twitter Title",
      type: "string",
      description: "The title of your site for twitter",
    },
    {
      name: "twitterDescription",
      title: "Twitter Description",
      type: "text",
      description: "The description of your site for twitter",
    },
    {
      name: "twitterImage",
      title: "Twitter Image",
      type: "image",
      description: "The image of your site for twitter",
    },
    {
      name: "twitterUrl",
      title: "Twitter URL",
      type: "url",
      description: "The URL of your site for twitter",
    },
  ],
}
