import { formatTasks } from "../../utils/tasks";
import {
	GetTasksDocument,
	GetTasksQuery,
	Status,
	useGetTasksQuery,
	useMoveTaskMutation,
} from "../../graphql";
import { Card } from "./Card";
import { Container, TaskColumn, TaskList } from "./styles";
import { Text } from "../../components/common/Text";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

function Dashboard() {
	const [moveTask] = useMoveTaskMutation({
		update: (cache, result) => {
			const data = cache.readQuery<GetTasksQuery>({
				query: GetTasksDocument,
			});
			console.log(data);
			const tasks = data?.tasks;
			const newTask = result.data?.updateTask;
			if (tasks && newTask) {
				const oldTasks = tasks.filter((task) => task.id !== newTask.id);
				const newTasks = [...oldTasks, newTask];
				cache.writeQuery<GetTasksQuery>({
					query: GetTasksDocument,
					data: {
						tasks: newTasks,
					},
				});
			}
		},
	});

	const { data, loading, error } = useGetTasksQuery({
		notifyOnNetworkStatusChange: true,
	});

	if (loading) {
		return <div />;
	}

	if (error) {
		return <div />;
	}

	if (!data || !data.tasks.length) {
		return <div />;
	}

	const taskData = formatTasks(data.tasks);

	const handleOnDragEnd = async (result: DropResult) => {
		const { destination, draggableId } = result;
		const task = data.tasks.find((task) => task.id === draggableId);
		if (!task || !destination || !draggableId) {
			return;
		}

		await moveTask({
			variables: {
				input: {
					id: draggableId,
					status: destination.droppableId as Status,
					position: destination.index + 1,
				},
			},
			optimisticResponse: {
				__typename: "Mutation",
				updateTask: {
					__typename: "Task",
					id: task.id,
					name: task.name,
					dueDate: task.dueDate,
					tags: task.tags,
					pointEstimate: task.pointEstimate,
					position: destination?.index || task?.position,
					status: (destination?.droppableId as Status) || task?.status,
					assignee: {
						__typename: "User",
						id: task.assignee?.id || "-",
						avatar: task.assignee?.avatar,
						fullName: task.assignee?.fullName || "-",
					},
				},
			},
		});
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Container>
				{(Object.keys(taskData) as Array<keyof typeof taskData>).map((status) => (
					<TaskColumn key={status}>
						<Text as="h1" size="lg" weight="bold" variant="body">
							{status} ({taskData[status].length})
						</Text>

						<Droppable droppableId={status}>
							{(provided) => (
								<TaskList ref={provided.innerRef} {...provided.droppableProps}>
									{taskData[status].map((task, index) => (
										<Card key={task.id} task={task} index={index} />
									))}
									{provided.placeholder}
								</TaskList>
							)}
						</Droppable>
					</TaskColumn>
				))}
			</Container>
		</DragDropContext>
	);
}

export { Dashboard };
