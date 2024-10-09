import {
	DefaultTheme as NavigationDefaultTheme,
	DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";

export const LightTheme = {
	...NavigationDefaultTheme,
	colors: {
		...NavigationDefaultTheme.colors,
		// primary: "#6200ee",
		// background: "#ffffff",
		// text: "#000000",
		// card: "#f5f5f5",
		// border: "#cccccc",
	},
};

export const DarkTheme = {
	...NavigationDarkTheme,
	colors: {
		...NavigationDarkTheme.colors,
		// primary: "#bb86fc",
		// background: "#121212",
		// text: "#ffffff",
		// card: "#1f1f1f",
		// border: "#272727",
	},
};
