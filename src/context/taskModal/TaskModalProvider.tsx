import { ReactNode, useReducer } from "react";
import { TaskItem } from "../../utils/tasks";
import { TaskModalContext } from "./TaskModalContext";

interface Props {
	children: ReactNode;
}

interface State {
	task: TaskItem | null;
	taskId: string | null;
	isFormModalOpen: boolean;
	isDeleteModalOpen: boolean;
}

type Action =
	| { type: "OPEN_CREATE_MODAL" }
	| { type: "OPEN_UPDATE_MODAL"; payload: TaskItem }
	| { type: "CLOSE_FORM_MODAL" }
	| { type: "OPEN_DELETE_MODAL"; payload: string }
	| { type: "CLOSE_DELETE_MODAL" };

const initialState: State = {
	task: null,
	taskId: null,
	isFormModalOpen: false,
	isDeleteModalOpen: false,
};

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case "OPEN_CREATE_MODAL":
			return {
				...state,
				isFormModalOpen: true,
			};
		case "OPEN_UPDATE_MODAL":
			return {
				...state,
				isFormModalOpen: true,
				task: action.payload,
			};
		case "CLOSE_FORM_MODAL":
			return {
				...state,
				isFormModalOpen: false,
				task: null,
			};
		case "OPEN_DELETE_MODAL":
			return {
				...state,
				isDeleteModalOpen: true,
				taskId: action.payload,
			};
		case "CLOSE_DELETE_MODAL":
			return {
				...state,
				isDeleteModalOpen: false,
				taskId: null,
			};
		default:
			return state;
	}
}

function TaskModalProvider(props: Props) {
	const { children } = props;

	const [state, dispatch] = useReducer(reducer, initialState);

	const openCreateModal = () => {
		dispatch({ type: "OPEN_CREATE_MODAL" });
	};

	const openUpdateModal = (task: TaskItem) => {
		dispatch({ type: "OPEN_UPDATE_MODAL", payload: task });
	};

	const closeFormModal = () => {
		dispatch({ type: "CLOSE_FORM_MODAL" });
	};

	const openDeleteModal = (taskId: string) => {
		dispatch({ type: "OPEN_DELETE_MODAL", payload: taskId });
	};

	const closeDeleteModal = () => {
		dispatch({ type: "CLOSE_DELETE_MODAL" });
	};

	const value = {
		task: state.task,
		taskId: state.taskId,
		isFormModalOpen: state.isFormModalOpen,
		isDeleteModalOpen: state.isDeleteModalOpen,
		openCreateModal,
		openUpdateModal,
		closeFormModal,
		openDeleteModal,
		closeDeleteModal,
	};

	return <TaskModalContext.Provider value={value}>{children}</TaskModalContext.Provider>;
}

export { TaskModalProvider };
