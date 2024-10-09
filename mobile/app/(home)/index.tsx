import { View } from "react-native";
import Text from "@/components/text";

export default function Home() {
	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text style={{ fontSize: 21 }}>Home</Text>
		</View>
	);
}
