import { RiMoreFill as OptionsIcon, RiAlarmLine as TimerIcon } from "react-icons/ri";
import { Draggable } from "react-beautiful-dnd";
import { Text } from "../../../components/common/Text";
import { Avatar } from "../../../components/common/Avatar";
import { useRef, useState } from "react";
import { TaskItem } from "../../../utils/tasks";
import { onClickOutside } from "../../../hooks/onClickOutside";
import { formatPointEstimate } from "../../../utils/pointEstimate";
import { getTagBackgroundColor, getTagFontColor } from "../../../utils/tag";
import { OptionsMenu } from "./OptionsMenu";
import { useTaskModal } from "../../../context/taskModal/TaskModalContext";
import { formatDueDate, getDueDateBackgroundColor, getDueDateFontColor } from "../../../utils/date";
import {
	Container,
	Content,
	Footer,
	Tag,
	Header,
	IconButton,
	TagsContainer,
	TimerContainer,
} from "./styles";

interface Props {
	task: TaskItem;
	index: number;
}

function Card(props: Props) {
	const { task, index } = props;

	const { openDeleteModal } = useTaskModal();

	const optionsMenuRef = useRef<HTMLDivElement>(null);
	const [isOpenOptionsMenu, setIsOpenOptionsMenu] = useState(false);

	const toggleOptionsMenu = () => {
		setIsOpenOptionsMenu((prev) => !prev);
	};

	onClickOutside(optionsMenuRef, () => {
		setIsOpenOptionsMenu(false);
	});

	return (
		<Draggable draggableId={task.id} index={index}>
			{(provided) => (
				<Container
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<Header>
						<Text size="lg" weight="bold" variant="body">
							{task.name}
						</Text>
						<div ref={optionsMenuRef}>
							<IconButton onClick={toggleOptionsMenu}>
								<OptionsIcon size={24} />
							</IconButton>
							{isOpenOptionsMenu && (
								<OptionsMenu
									task={task}
									openConfirmModal={() => openDeleteModal(task.id)}
									closeOptionsMenu={() => {
										setIsOpenOptionsMenu(false);
									}}
								/>
							)}
						</div>
					</Header>

					<Content>
						<TimerContainer>
							<Text size="md" weight="bold" variant="body">
								{formatPointEstimate(task.pointEstimate)}
							</Text>
							<Tag
								color={getDueDateFontColor(task.dueDate)}
								backgroundColor={getDueDateBackgroundColor(task.dueDate)}
							>
								<TimerIcon size={24} />
								<Text size="md" weight="bold" variant="body">
									{formatDueDate(task.dueDate)}
								</Text>
							</Tag>
						</TimerContainer>
						<TagsContainer>
							{task.tags.map((tag, index) => (
								<Tag
									key={index}
									color={getTagFontColor(tag)}
									backgroundColor={getTagBackgroundColor(tag)}
								>
									{tag}
								</Tag>
							))}
						</TagsContainer>
					</Content>

					<Footer>
						<Avatar size={32} src={task.assignee?.avatar} />
					</Footer>
				</Container>
			)}
		</Draggable>
	);
}

export { Card };
