module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	verbose: true,
	moduleFileExtensions: ["ts", "js"],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
	testMatch: ["**/__tests__/**/*.test.ts"],
};
