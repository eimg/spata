import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
	const alice = await prisma.user.upsert({
		where: { email: "alice@example.com" },
		update: {},
		create: {
			email: "alice@example.com",
			name: "Alice",
			posts: {
				create: {
					title: "Setting up express",
					content: "We are going to use TypeScript",
					published: true,
				},
			},
		},
	});
	const bob = await prisma.user.upsert({
		where: { email: "bob@example.com" },
		update: {},
		create: {
			email: "bob@example.com",
			name: "Bob",
			posts: {
				create: [
					{
						title: "Prisma ORM",
						content: "With SQLite, win!",
						published: true,
					},
					{
						title: "Migration and Seeding",
						content: "Let's get started",
						published: true,
					},
				],
			},
		},
	});
	console.log({ alice, bob });
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
