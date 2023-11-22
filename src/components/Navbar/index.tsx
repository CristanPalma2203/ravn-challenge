import { RiMenuLine as ListIcon, RiFunctionLine as GridIcon } from "react-icons/ri";

import { Container, Indicator, SwitchButton, SwitchContainer } from "./styles";

function Navbar() {
	return (
		<Container>
			<SwitchContainer>
				<SwitchButton to="/my-tasks">
					{({ isActive }) => (
						<>
							<ListIcon size={24} />
							{isActive && <Indicator layoutId="tb-sw-ind" />}
						</>
					)}
				</SwitchButton>
				<SwitchButton to="/dashboard">
					{({ isActive }) => (
						<>
							<GridIcon size={24} />
							{isActive && <Indicator layoutId="tb-sw-ind" />}
						</>
					)}
				</SwitchButton>
			</SwitchContainer>
		</Container>
	);
}

export { Navbar };
