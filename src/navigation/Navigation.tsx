import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Layout } from "../components/Layout";
import { Dashboard } from "../pages/Dashboard";
function Navigation() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route>
						<Route path="/dashboard" element={<Dashboard />} />
					</Route>
				</Route>
				<Route path="/not-found" element={<NotFound />} />
				<Route path="/" element={<Navigate to="/dashboard" replace />} />
				<Route path="*" element={<Navigate to="/not-found" replace />} />
			</Routes>
		</Router>
	);
}

export { Navigation };
