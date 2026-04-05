import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from 'astro:content';

export const prerender = false

export const GET: APIRoute = async ({ params, request }) => {
    const posts = await getCollection('blog')
    console.log('params', params)
    console.log(request)
    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}