import { groq } from "next-sanity"
import { client } from "../lib/sanity"
import { Tools } from "../lib/interface"
import { getToolsData } from "../lib/getSanityData"

export default async function SectionTools() {
  const toolsData = (await getToolsData()) as Tools[]

  if (!toolsData) return <div>Loading...</div>

  return (
    <>
      <h2>.tools()</h2>
      <section>
        {toolsData.map((tool) => (
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
