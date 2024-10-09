import { Stack } from "expo-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";

const queryClient = new QueryClient();

export default function RootLayout() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<Stack>
					<Stack.Screen
						name="(home)"
						options={{ headerShown: false, title: "Home" }}
					/>
					<Stack.Screen
						name="auth"
						options={{ title: "Login" }}
					/>
				</Stack>
			</ThemeProvider>
		</QueryClientProvider>
	);
}
