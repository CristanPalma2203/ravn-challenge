import styled from "styled-components";
import fakeAvatar from "../../../assets/images/avatar.jpg";

interface Props {
	size: number;
	src: string | null | undefined;
}

function Avatar(props: Props) {
	const { src, size } = props;

	return <Image src={src || fakeAvatar} width={size} height={size} />;
}

export const Image = styled.img`
	aspect-ratio: 1;
	object-fit: cover;
	border-radius: 50%;
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
`;

export { Avatar };
