import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from 'astro:content';


export const GET: APIRoute = async ({ params, request }) => {
    const posts = await getCollection('blog')
    // console.log(posts)
    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}