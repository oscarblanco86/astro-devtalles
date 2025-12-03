import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: z.string(),

        author: reference('author'),

        tags: z.array(z.string())

    })
})

const authorCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        avatar: z.string(),
    })
})

export const collections = {
    blog: blogCollection,
    author: authorCollection
}
