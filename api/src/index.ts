import express, { Request, Response } from "express";
const app = express();

import cors from "cors";
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { router as userRouter } from "./routes/user";
app.use(userRouter);

app.get("/", (req: Request, res: Response) => {
	res.send("Express API Index");
});

app.listen(8000, () => {
	console.log("API server running at port 8000");
});
