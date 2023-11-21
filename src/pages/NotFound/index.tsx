import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div>
			Page Not Found
			<br />
			<Link to="/dashboard">Go to Home</Link>
		</div>
	);
}

export { NotFound };
