import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "../pages/NotFound";

function Navigation() {
	return (
		<Router>
			<Routes>
				<Route path="/not-found" element={<NotFound />} />
				<Route path="/" element={<Navigate to="/dashboard" replace />} />
				<Route path="*" element={<Navigate to="/not-found" replace />} />
			</Routes>
		</Router>
	);
}

export { Navigation };
