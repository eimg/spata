import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/home";
import Auth from "./pages/auth";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Auth />,
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
