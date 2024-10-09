import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react-native";

import Text from "@/components/text";

describe("sum module", () => {
	it("should add 1 + 2 to equal 3", () => {
		expect(1 + 2).toBe(3);
	});
});

describe("Custom Text component", () => {
	it("should render Text correctly", () => {
		const { getByText } = render(<Text>Home</Text>);

		getByText("Home");
	});
});
