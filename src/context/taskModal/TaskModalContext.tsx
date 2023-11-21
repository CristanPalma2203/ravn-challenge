import { createContext, useContext } from "react";
import { TaskItem } from "../../utils/tasks";

interface TaskModalContextValue {
	task: TaskItem | null;
	taskId: string | null;
	isFormModalOpen: boolean;
	isDeleteModalOpen: boolean;
	openCreateModal: () => void;
	openUpdateModal: (task: TaskItem) => void;
	closeFormModal: () => void;
	openDeleteModal: (taskId: string) => void;
	closeDeleteModal: () => void;
}

const TaskModalContext = createContext<TaskModalContextValue | null>(null);

const useTaskModal = () => {
	const context = useContext(TaskModalContext);

	if (!context) {
		throw new Error("useTaskModal must be used within a TaskModalProvider");
	}

	return context;
};

export { useTaskModal, TaskModalContext };
