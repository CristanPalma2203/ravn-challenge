import { RiFunctionLine as GridIcon, RiAddLine as AddIcon } from "react-icons/ri";
import { useTaskModal } from "../../context/taskModal/TaskModalContext";
import { Container, IconButton, Indicator, SwitchButton, SwitchContainer } from "./styles";

function Topbar() {
	const { openCreateModal } = useTaskModal();

	return (
		<Container>
			<SwitchContainer>
				<SwitchButton to="/dashboard">
					{({ isActive }) => (
						<>
							<GridIcon size={24} />
							{isActive && <Indicator layoutId="tb-sw-ind" />}
						</>
					)}
				</SwitchButton>
			</SwitchContainer>
			<IconButton onClick={openCreateModal}>
				<AddIcon size={24} />
			</IconButton>
		</Container>
	);
}

export { Topbar };
