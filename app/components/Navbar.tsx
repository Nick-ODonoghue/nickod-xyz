import { client } from "../lib/sanity"
import { groq } from "next-sanity"
import Link from "next/link"
import { NavbarLinks } from "../lib/interface"

async function getData() {
  const query = groq`*[_type == "navbarLinks"] | order(order asc)`
  const data = await client.fetch(query)
  return data
}

export default async function Navbar() {
  const data = (await getData()) as NavbarLinks[]

  if (!data) return <div>Loading...</div>

  return (
    <>
      <ul className=' flex space-x-10'>
        {data.map((link) => (
          <li key={link._id}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
