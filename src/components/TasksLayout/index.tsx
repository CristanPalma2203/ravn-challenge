import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Topbar } from "../Topbar";
import { TaskModal } from "../TaskModal";
import { useTaskModal } from "../../context/taskModal/TaskModalContext";
import { TaskModalProvider } from "../../context/taskModal/TaskModalProvider";
import { AnimatePresence } from "framer-motion";
import { ConfirmModal } from "../ConfirmModal";

function TasksLayout() {
	const { isFormModalOpen, isDeleteModalOpen } = useTaskModal();
	return (
		<Container>
			<Topbar />
			<Outlet />
			<AnimatePresence>{isFormModalOpen && <TaskModal />}</AnimatePresence>
			<AnimatePresence>{isDeleteModalOpen && <ConfirmModal />}</AnimatePresence>
		</Container>
	);
}

function TasksLayoutWrapper() {
	return (
		<TaskModalProvider>
			<TasksLayout />
		</TaskModalProvider>
	);
}

const Container = styled.main`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export { TasksLayoutWrapper as TasksLayout };
