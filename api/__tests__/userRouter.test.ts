import { it, expect, describe } from "@jest/globals";
import request from "supertest";

import express from "express";
const app = express();

import { router as userRouter } from "../src/routes/user";
app.use(userRouter);

describe("GET /users", () => {
	it("should respond 200 and json", async () => {
		return request(app)
			.get("/users")
			.expect("Content-Type", /json/)
			.expect(200)
			.then(res => {
				expect(res.statusCode).toBe(200);
			});
	});
});
