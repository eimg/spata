import { View } from "react-native";
import Text from "@/components/text";
import { Link } from "expo-router";

import { useTheme } from "@react-navigation/native";

export default function Profile() {
	const { colors } = useTheme();

	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Link
				href="../auth"
				style={{
					marginTop: 10,
					paddingHorizontal: 20,
					paddingVertical: 8,
					borderRadius: 5,
					borderWidth: 1,
					borderColor: colors.primary,
				}}>
				<Text style={{ fontSize: 18, color: colors.primary }}>
					Login
				</Text>
			</Link>
		</View>
	);
}
