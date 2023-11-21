import { IconType } from "react-icons";
import { To } from "react-router-dom";
import { Text } from "../../common/Text";
import { Container, Indicator } from "./styles";

interface Props {
	to: To;
	icon: IconType;
	label: string;
}

function SidebarItem(props: Props) {
	const { to, icon: Icon, label } = props;

	return (
		<Container to={to}>
			{({ isActive }) => (
				<>
					<Icon size={24} />
					<Text size="md" weight="bold" variant="body">
						{label}
					</Text>
					{isActive && <Indicator layoutId="sb-tab-ind" />}
				</>
			)}
		</Container>
	);
}

export { SidebarItem };
