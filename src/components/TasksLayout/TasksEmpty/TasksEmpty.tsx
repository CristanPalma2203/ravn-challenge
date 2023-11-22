import styled from "styled-components";

function TasksEmpty() {
	return (
		<Container>
			<span className="font-lg-regular">ADD NEW TASKS</span>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	gap: 16px;
	background-color: #94979a19;
	border-radius: 24px;
`;

export { TasksEmpty };
