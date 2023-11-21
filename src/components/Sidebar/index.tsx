import { RiMenuLine as ListIcon, RiFunctionLine as GridIcon } from "react-icons/ri";
import logo from "../../assets/images/logo.svg";
import { SidebarItem } from "./SidebarItem";
import { Container, Logo, TabList } from "./styles";

function Sidebar() {
	return (
		<Container>
			<Logo src={logo} />
			<TabList>
				<SidebarItem to="/dashboard" icon={GridIcon} label="DASHBOARD" />
				<SidebarItem to="/my-tasks" icon={ListIcon} label="MY TASKS" />
			</TabList>
		</Container>
	);
}

export { Sidebar };
