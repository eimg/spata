import React, { createContext, useContext, useEffect, useState } from "react";

import { ThemeProvider as NavigationThemeProvider } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appearance } from "react-native";

import { LightTheme, DarkTheme } from "@/constants/themes";

type ThemeContextType = {
	isDark: boolean;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const THEME_STORAGE_KEY = "app-ui-theme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const systemColorScheme = Appearance.getColorScheme();
	const [isDark, setisDark] = useState(systemColorScheme === "dark");

	useEffect(() => {
		const loadTheme = async () => {
			const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
			if (savedTheme !== null) {
				setisDark(savedTheme === "dark");
			}
		};

		loadTheme();
	}, []);

	const toggleTheme = async () => {
		const newTheme = isDark ? "light" : "dark";
		setisDark(!isDark);

		await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
	};

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
			<NavigationThemeProvider value={isDark ? DarkTheme : LightTheme}>
				{children}
			</NavigationThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within an ThemeProvider");
	}

	return context;
};
