import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Layout } from "../components/Layout";
import { Dashboard } from "../pages/Dashboard";
import { TasksLayout } from "../components/TasksLayout";
import { Settings } from "../pages/Settings";

function Navigation() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route element={<TasksLayout />}>
						<Route path="/dashboard" element={<Dashboard />} />
					</Route>
					<Route path="/settings" element={<Settings />} />
				</Route>
				<Route path="/not-found" element={<NotFound />} />
				<Route path="/" element={<Navigate to="/dashboard" replace />} />
				<Route path="*" element={<Navigate to="/not-found" replace />} />
			</Routes>
		</Router>
	);
}

export { Navigation };
