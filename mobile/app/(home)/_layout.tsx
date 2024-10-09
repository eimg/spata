import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import { StatusBar } from "expo-status-bar";

import { useTheme } from "@/components/theme-provider";

export default function TabLayout() {
	const { isDark } = useTheme();

	return (
		<>
			<Tabs
				screenOptions={{
					headerShown: false,
					tabBarShowLabel: false,
				}}>
				<Tabs.Screen
					name="index"
					options={{
						title: "Home",
						tabBarIcon: ({ color, focused }) => (
							<Ionicons
								name="home-outline"
								size={24}
								color={color}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="search"
					options={{
						title: "Search",
						tabBarIcon: ({ color, focused }) => (
							<Ionicons
								name="search-outline"
								size={24}
								color={color}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						title: "Profile",
						tabBarIcon: ({ color, focused }) => (
							<Ionicons
								name="person-circle-outline"
								size={24}
								color={color}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="settings"
					options={{
						title: "Settings",
						tabBarIcon: ({ color, focused }) => (
							<Ionicons
								name="settings-outline"
								size={24}
								color={color}
							/>
						),
					}}
				/>
			</Tabs>

			<StatusBar style={isDark ? "light" : "dark"} />
		</>
	);
}
