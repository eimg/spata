import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
	const { pathname } = useLocation();

	return (
		<div className="p-2">
			<nav className="flex justify-between">
				<Button
					variant="ghost"
					asChild>
					<Link to="/">
						{pathname === "/" ? <Home /> : <ArrowLeft />}
					</Link>
				</Button>
				<div className="flex gap-2">
					<Button
						variant="ghost"
						asChild>
						<Link to="/login">Login</Link>
					</Button>
					<ModeToggle />
				</div>
			</nav>
			<div className="container">
				<Outlet />
			</div>
		</div>
	);
}
