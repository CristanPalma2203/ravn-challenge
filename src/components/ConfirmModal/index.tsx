import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import { useTaskModal } from "../../context/taskModal/TaskModalContext";
import { GetTasksDocument, GetTasksQuery, useDeleteTaskMutation } from "../../graphql";
import { Text } from "../common/Text";
import { ActionsContainer, Backdrop, CancelButton, Container, DeleteButton } from "./styles";

function ConfirmModal() {
	const container = document.getElementById("modal_test") as HTMLDivElement;
	return createPortal(<Modal />, container);
}

function Modal() {
	const { taskId, closeDeleteModal } = useTaskModal();

	const [deleteTask] = useDeleteTaskMutation({
		update: (cache, result) => {
			const data = cache.readQuery<GetTasksQuery>({ query: GetTasksDocument });
			const tasks = data?.tasks;
			const deletedTaskId = result.data?.deleteTask.id;
			if (tasks && deletedTaskId) {
				cache.writeQuery<GetTasksQuery>({
					query: GetTasksDocument,
					data: { tasks: tasks.filter((task) => task.id !== deletedTaskId) },
				});
			}
		},
	});

	const handleDeleteTask = async () => {
		if (!taskId) {
			throw new Error("Task id is not defined");
		}

		try {
			await deleteTask({
				variables: {
					input: {
						id: taskId,
					},
				},
				optimisticResponse: {
					__typename: "Mutation",
					deleteTask: {
						__typename: "Task",
						id: taskId,
					},
				},
			});
			toast.success("Task deleted successfully");
			closeDeleteModal();
		} catch {
			toast.error("Error deleting task");
		}
	};

	return (
		<Backdrop
			onClick={closeDeleteModal}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Container
				initial={{ y: "-100vh", opacity: 0 }}
				animate={{ y: "0", opacity: 1 }}
				exit={{ y: "100vh", opacity: 0 }}
				onClick={(e) => e.stopPropagation()}
			>
				<Text size="xl" weight="bold" variant="body">
					Are you sure?
				</Text>
				<Text size="md" weight="regular" variant="body">
					This action can not be undone.
				</Text>
				<ActionsContainer>
					<CancelButton className="font-md-regular" onClick={closeDeleteModal}>
						<Text size="md" variant="body" weight="regular">
							Cancel
						</Text>
					</CancelButton>
					<DeleteButton className="font-md-regular" onClick={handleDeleteTask}>
						<Text size="md" variant="body" weight="regular">
							Delete
						</Text>
					</DeleteButton>
				</ActionsContainer>
			</Container>
		</Backdrop>
	);
}

export { ConfirmModal };
