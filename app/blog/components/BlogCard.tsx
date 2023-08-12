import { getAllBlogData } from "../../lib/getSanityData"
import { Blog } from "../../lib/interface"

import Link from "next/link"

export default async function BlogCard() {
  const blogData = (await getAllBlogData()) as Blog[]

  return (
    <>
      {blogData.map((blog) => (
        <div key={blog._id}>
          <p>{blog.createdAt}</p>
          <Link href={`/blog/${blog.slug.current}`} prefetch>
            <article>
              <div>
                <div>
                  <h2>{blog.title}</h2>
                </div>
                <div>
                  <p>{blog.overview}</p>
                </div>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </>
  )
}
