import { groq } from "next-sanity"
import { client } from "../lib/sanity"
import { Tools } from "../lib/interface"

async function getData() {
  const query = groq`*[ _type == "tools"]`
  const data = await client.fetch(query)
  return data
}

export default async function SectionTools() {
  const data = (await getData()) as Tools[]

  if (!data) return <div>Loading...</div>

  return (
    <>
      <h2>.tools()</h2>
      <section>
        {data.map((tool) => (
          <div key={tool._id}>
            <h3>{tool.toolsIntro}</h3>
            <ul>
              {tool.frontendTools.map((frontendTool) => (
                <li key={frontendTool.tool}>{frontendTool.tool}</li>
              ))}
            </ul>
            <ul>
              {tool.backendTools.map((backendTool) => (
                <li key={backendTool.tool}>{backendTool.tool}</li>
              ))}
            </ul>
            <ul>
              {tool.otherTools.map((otherTool) => (
                <li key={otherTool.tool}>{otherTool.tool}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  )
}
