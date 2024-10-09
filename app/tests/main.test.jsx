import { it, expect, describe } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import App from "@/App";

describe("math test", () => {
	it("should be 3", () => {
		expect(1 + 2).toBe(3);
	});
});

describe("UI test", () => {
	render(<App />);

	it("should render correctly", () => {
		expect(screen.getByRole("title")).toBeInTheDocument();
	});

	// it("input and event", async () => {
	// 	await fireEvent.change(screen.getByRole("input"), {
	// 		target: { value: "some value" },
	// 	});
	// 	await fireEvent.click(screen.getByRole("button"));
	// 	expect(screen.getByRole("result").textContent).toBe("something");
	// });
});
