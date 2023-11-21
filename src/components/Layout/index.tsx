import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { Searchbar } from "../Searchbar";

function Layout() {
	return (
		<Container>
			<Sidebar />
			<Content>
				<Searchbar />
				<Outlet />
			</Content>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	gap: 32px;
	height: 100%;
	padding: 32px;
	margin-left: auto;
	margin-right: auto;
	width: 1440px;
	overflow: hidden;
`;

const Content = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 32px;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export { Layout };
