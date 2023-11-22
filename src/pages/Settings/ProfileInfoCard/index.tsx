import { Container, FieldContainer, InfoContainer } from "./styles";
import { Text } from "../../../components/common/Text";
import { Avatar } from "../../../components/common/Avatar";

function ProfileInfoCard() {
	const user = {
		avatar: "https://avatars.githubusercontent.com/u/49558936?v=4",
		name: "John Doe",
		email: "JohnDoe@gmail.com",
	};

	const userInfo = [
		{ label: "Name", value: "John Doe" },
		{ label: "Email", value: "JohnDoe@gmail.com" },
		{ label: "User Type", value: "ADMIN" },
		{ label: "Created at", value: "2023-11-22T10:15:53.068Z" },
		{ label: "Updated at ", value: "2023-11-22T10:15:53.068Z" },
	];

	return (
		<Container>
			<Text as="h2" size="xl" variant="body" weight="bold">
				Profile
			</Text>
			<InfoContainer>
				<Avatar src={user?.avatar} size={120} />
				<FieldContainer>
					{userInfo.map((info) => (
						<Text key={info.label} as="dt" size="lg" variant="body" weight="bold">
							{info.label}
						</Text>
					))}
					{userInfo.map((info, index) => (
						<Text key={index} as="dd" size="md" variant="body" weight="regular">
							{info.value}
						</Text>
					))}
				</FieldContainer>
			</InfoContainer>
		</Container>
	);
}

export { ProfileInfoCard };
