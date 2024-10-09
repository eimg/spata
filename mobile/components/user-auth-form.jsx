import React, { useState } from "react";
import {
	View,
	TextInput,
	StyleSheet,
	ActivityIndicator,
	TouchableOpacity,
} from "react-native";

import Text from "./text";
import { useTheme } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useForm, Controller } from "react-hook-form";

export function UserAuthForm() {
	const [isLoading, setIsLoading] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		setIsLoading(true);

		setTimeout(() => {
			console.log(data);
			setIsLoading(false);
		}, 3000);
	};

	const { colors } = useTheme();

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							style={[styles.input, { color: colors.text }]}
							placeholder="name@example.com"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholderTextColor="#999"
							autoCapitalize="none"
							autoCorrect={false}
							editable={!isLoading}
						/>
					)}
					name="email"
				/>
				{errors.email && (
					<Text style={{ color: "deeppink" }}>
						Email is required.
					</Text>
				)}
			</View>

			<TouchableOpacity
				disabled={isLoading}
				onPress={handleSubmit(onSubmit)}
				style={[styles.button, { backgroundColor: colors.primary }]}>
				<Text style={{ color: "white" }}>Sign in with email</Text>
			</TouchableOpacity>
			{isLoading && <ActivityIndicator style={styles.spinner} />}

			<View style={styles.separator}>
				<View style={styles.line} />
				<Text
					style={[
						styles.orText,
						{ backgroundColor: colors.background },
					]}>
					Or continue with
				</Text>
			</View>

			<View style={styles.socialButtons}>
				<TouchableOpacity
					disabled={isLoading}
					onPress={() => {}}
					style={[styles.socialButton, { borderColor: colors.text }]}>
					<Ionicons
						name="logo-github"
						size={24}
						color={colors.text}
					/>
					<Text>Github</Text>
				</TouchableOpacity>
				<TouchableOpacity
					disabled={isLoading}
					onPress={() => {}}
					style={[styles.socialButton, { borderColor: colors.text }]}>
					<Ionicons
						name="logo-google"
						size={24}
						color={colors.text}
					/>
					<Text>Google</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},
	inputContainer: {
		width: 300,
		marginBottom: 12,
	},
	input: {
		borderWidth: 1,
		padding: 8,
		borderRadius: 4,
		borderColor: "#ccc",
	},
	spinner: {
		marginTop: 8,
	},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 12,
		borderRadius: 4,
		alignItems: "center",
	},
	separator: {
		marginVertical: 16,
		alignItems: "center",
		justifyContent: "center",
	},
	line: {
		position: "absolute",
		borderBottomWidth: 1,
		borderColor: "#6b7280",
		width: "100%",
	},
	orText: {
		marginVertical: 8,
		fontSize: 12,
		textAlign: "center",
		paddingHorizontal: 10,
		color: "#6b7280",
	},
	socialButtons: {
		gap: 10,
	},
	socialButton: {
		flexDirection: "row",
		paddingHorizontal: 20,
		paddingVertical: 12,
		borderRadius: 4,
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
		borderWidth: 1,
		marginBottom: 10,
	},
});
