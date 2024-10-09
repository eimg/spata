import express, { Request, Response } from "express";
export const router = express.Router();

import { query, validationResult } from "express-validator";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

router.get("/users", async (req: Request, res: Response) => {
	const users = await prisma.user.findMany({
		include: {
			posts: true,
		},
	});

	res.send(users);
});

router.get(
	"/users/search",
	query("q").notEmpty(),
	async (req: Request, res: Response) => {
		const result = validationResult(req);

		if (result.isEmpty()) {
			const { q } = req.query;

			const data = await prisma.user.findMany({
				where: {
					name: {
						contains: String(q),
					},
				},
			});

			res.json(data);
		} else {
            res.status(400).json({ errors: result.array() });
        }
	},
);
