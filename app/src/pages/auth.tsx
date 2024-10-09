import { UserAuthForm } from "@/components/user-auth-form";

export default function Auth() {
	return (
		<div className="lg:p-8">
			<div className="mx-auto flex flex-col justify-center space-y-6 w-[350px]">
				<div className="flex flex-col space-y-2 text-center">
					<h1 className="text-2xl font-semibold tracking-tight">
						Spata Login
					</h1>
					<p className="text-sm text-muted-foreground">
						Enter your email below to sign in or create a new
						account
					</p>
				</div>
				<UserAuthForm />
				<p className="px-8 text-center text-sm text-muted-foreground">
					By clicking continue, you agree to our{" "}
					<a
						href="/terms"
						className="underline underline-offset-4 hover:text-primary">
						Terms of Service
					</a>{" "}
					and{" "}
					<a
						href="/privacy"
						className="underline underline-offset-4 hover:text-primary">
						Privacy Policy
					</a>
					.
				</p>
			</div>
		</div>
	);
}
