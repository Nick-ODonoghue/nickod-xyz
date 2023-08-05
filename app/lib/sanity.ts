import { createClient } from "@sanity/client"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = "2023-08-05"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})
