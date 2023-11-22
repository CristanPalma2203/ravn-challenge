import styled from "styled-components";
import { ProfileInfoCard } from "./ProfileInfoCard";

function Settings() {
	return (
		<Container>
			<ProfileInfoCard />
		</Container>
	);
}

const Container = styled.div`
	gap: 32px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export { Settings };
