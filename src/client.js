import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'yb8z4v1v',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-11-30', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getProjects() {
  const projects = await client.fetch('*[_type == "projects"]')
  
  return projects
}


export async function getProjectById(id) {
  
    const project = await client.getDocument(id)
    const imagenesRefs = project.imagenes.map(imagen => imagen.asset._ref)
    console.log(project)
    return {
      title: project.title,
      imageFiles: project.newsDatetime,
      description:project.description,
      tags: project.tags,
      projectYears: project.category,
      status: project.status,
      id: project._id,
      imagenes:imagenesRefs
  }
}



const builder = imageUrlBuilder(client)

export function urlFor(source){
    return builder.image(source)
}
