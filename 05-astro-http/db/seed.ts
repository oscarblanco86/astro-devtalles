import { db, Clients } from 'astro:db';


// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Clients).values([
		{
			id: 1,
			name: "Oscar",
			age: 40,
			isActive: true,
		},
		{
			id: 2,
			name: "Palencia",
			age: 43,
			isActive: true,
		},
		{
			id: 3,
			name: "Fernando",
			age: 41,
			isActive: false,
		},
		{
			id: 4,
			name: "Gerson",
			age: 39,
			isActive: true,
		},
		{
			id: 5,
			name: "Carlos",
			age: 42,
			isActive: true,
		},
	])
	console.log('Seed executed')
}
