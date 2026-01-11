import { APIRoute } from "astro";

export const GET: APIRoute = async ({params, request}) => {
    const person = { 
            name: 'Oscar Blanco', age: 25 
        }
	return new Response(JSON.stringify(person), {
		status:200,
		headers: {
			"Content-Type": "application/json",
		},
	});
};