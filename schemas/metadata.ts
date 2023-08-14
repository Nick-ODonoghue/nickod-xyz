export default {
  name: "metadata",
  title: "Metadata",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the page",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "The description of the page",
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      description: "The keywords of the page",
      of: [{ type: "string" }],
    },
    {
      name: "ogTitle",
      title: "Open Graph Title",
      type: "string",
      description: "The title of the page for social media",
    },
    {
      name: "ogDescription",
      title: "Open Graph Description",
      type: "text",
      description: "The description of the page for social media",
    },
    {
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      description: "The image of the page for social media",
    },
    {
      name: "twitterTitle",
      title: "Twitter Title",
      type: "string",
      description: "The title of the page for twitter",
    },
    {
      name: "twitterDescription",
      title: "Twitter Description",
      type: "text",
      description: "The description of the page for twitter",
    },
    {
      name: "twitterImage",
      title: "Twitter Image",
      type: "image",
      description: "The image of the page for twitter",
    },
  ],
}
