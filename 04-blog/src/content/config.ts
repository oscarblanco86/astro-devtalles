import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: z.string(),

        author: reference('author'),

        tags: z.array(z.string()),

        isDraft: z.boolean().default(false)

    })
})

const authorCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        avatar: z.string(),
        twitter: z.string(),
        linkedIn: z.string(),
        github: z.string(),
        bio: z.string(),
        subtitle: z.string(),
    })
})

export const collections = {
    blog: blogCollection,
    author: authorCollection
}
