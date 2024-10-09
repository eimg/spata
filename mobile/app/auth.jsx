import React from "react";
import { View, StyleSheet } from "react-native";
import { UserAuthForm } from "@/components/user-auth-form";
import Text from "@/components/text";

export default function Auth() {
	return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
				<View style={styles.header}>
					<Text style={styles.title}>Spata</Text>
					<Text style={styles.subtitle}>
						Enter your email below to sign in
					</Text>
				</View>

				<UserAuthForm />

				<Text style={styles.termsText}>
					By clicking continue, you agree to our{" "}
				</Text>
				<Text style={styles.termsText}>
					<Text style={styles.link}>Terms of Service</Text> and{" "}
					<Text style={styles.link}> Privacy Policy </Text>.
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 80,
		flex: 1,
		alignItems: "center",
	},
	innerContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		flexDirection: "column",
		alignItems: "center",
		marginBottom: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: "600",
		textAlign: "center",
	},
	subtitle: {
		fontSize: 14,
		color: "#6b7280",
		textAlign: "center",
	},
	termsText: {
		paddingHorizontal: 32,
		paddingVertical: 2,
		fontSize: 14,
		color: "#6b7280",
		textAlign: "center",
	},
	link: {
		textDecorationLine: "underline",
		color: "#3b82f6",
	},
});
