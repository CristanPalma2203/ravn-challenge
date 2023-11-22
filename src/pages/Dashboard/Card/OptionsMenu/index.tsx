import styled from "styled-components";
import { TaskItem } from "../../../../utils/tasks";
import { useTaskModal } from "../../../../context/taskModal/TaskModalContext";
import { RiPencilLine as EditIcon, RiDeleteBin6Line as DeleteIcon } from "react-icons/ri";
import { Text } from "../../../../components/common/Text";

interface Props {
	task: TaskItem;
	closeOptionsMenu: () => void;
	openConfirmModal: () => void;
}

function OptionsMenu(props: Props) {
	const { task, closeOptionsMenu, openConfirmModal } = props;

	const { openUpdateModal } = useTaskModal();

	const handleOpenUpdateModal = () => {
		openUpdateModal(task);
		closeOptionsMenu();
	};

	const handleOpenConfirmModal = () => {
		openConfirmModal();
		closeOptionsMenu();
	};

	return (
		<Container>
			<OptionItem onClick={handleOpenUpdateModal}>
				<EditIcon size={24} />
				<Text size="md" weight="regular" variant="body">
					Edit
				</Text>
			</OptionItem>
			<OptionItem onClick={handleOpenConfirmModal}>
				<DeleteIcon size={24} />
				<Text size="md" weight="regular" variant="body">
					Delete
				</Text>
			</OptionItem>
		</Container>
	);
}

const Container = styled.div`
	right: 0;
	top: 100%;
	padding: 8px 0;
	position: absolute;
	display: flex;
	flex-direction: column;
	gap: 8px;
	border-radius: 8px;
	border: 1px solid ${(props) => props.theme.palette.neutral[2]};
	background-color: ${(props) => props.theme.palette.neutral[3]};
`;

const OptionItem = styled.button`
	border: none;
	cursor: pointer;
	gap: 8px;
	width: 122px;
	display: flex;
	padding: 4px 24px;
	flex-direction: row;
	align-items: center;
	background-color: transparent;
	color: ${(props) => props.theme.palette.neutral[1]};

	&:hover {
		background-color: rgba(255, 255, 255, 0.25);
	}
`;

export { OptionsMenu };
