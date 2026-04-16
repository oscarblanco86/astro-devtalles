export const prerender = false

import type { APIRoute } from "astro";
import { getEntry } from "astro:content";

export const GET: APIRoute = async ({ params, request }) => {
    const { clientId } = params
    
    return new Response(JSON.stringify({ 
        method: `${request.method}`,
        clientId: clientId,
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export const PATCH: APIRoute = async ({ params, request }) => {
    const { clientId } = params
    
    return new Response(JSON.stringify({ 
        method: `${request.method}`,
        clientId: `${clientId}`,
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const DELETE: APIRoute = async ({ params, request }) => {
    const { clientId } = params

    return new Response(JSON.stringify({ 
        method: `${request.method}`,
        clientId: `${clientId}`,
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}