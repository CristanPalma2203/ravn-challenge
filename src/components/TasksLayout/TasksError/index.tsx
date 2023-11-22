import styled from "styled-components";
import { RiRestartLine as RetryIcon } from "react-icons/ri";

interface Props {
	handleRetry: () => void;
}

function TasksError(props: Props) {
	const { handleRetry } = props;

	return (
		<Container>
			<span className="font-lg-regular">ERROR FETCHING TASKS</span>
			<Button className="font-lg-regular" onClick={handleRetry}>
				<RetryIcon size={24} />
				<span>Retry</span>
			</Button>
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
	background-color: #d24d4d19;
	border-radius: 24px;
`;

const Button = styled.button`
	border: none;
	cursor: pointer;
	padding: 8px 16px;
	border-radius: 8px;
	display: flex;
	flex-direction: row;
	gap: 8px;
	align-items: center;
	color: ${(props) => props.theme.palette.neutral[1]};
	background-color: ${(props) => props.theme.palette.primary[4]};
`;

export { TasksError };
