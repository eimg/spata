import { ThemeSwitchButton } from "@/components/theme-switch-button";
import { View } from "react-native";

export default function Settings() {
	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<ThemeSwitchButton />
		</View>
	);
}
