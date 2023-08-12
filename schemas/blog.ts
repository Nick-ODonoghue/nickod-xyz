export default {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Blog Title",
      type: "string",
      description: "The title of the blog",
    },
    {
      name: "overview",
      title: "Blog Overview",
      type: "string",
      description: "The overview of the blog",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The slug of the blog",
      options: {
        source: "title",
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      description: "The date the blog was created",
      options: {
        dateFormat: "DD-MM-YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      description: "The content of the blog",
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
              title: "Alt",
            },
          ],
        },
      ],
    },
  ],
}
