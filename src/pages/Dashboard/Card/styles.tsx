import styled from "styled-components";

export const Container = styled.article`
	padding: 16px;
	border-radius: 8px;
	display: flex;
	gap: 16px;
	flex-direction: column;
	background-color: ${(props) => props.theme.palette.neutral[4]};
`;

export const Header = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	position: relative;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const Footer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const AvatarContainer = styled.figure`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Avatar = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	object-fit: cover;
`;

export const IconButton = styled.button`
	padding-top: 4px;
	padding-bottom: 4px;
	border: none;
	cursor: pointer;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.palette.neutral[2]};
`;

export const Title = styled.h3`
	font-size: 18px;
	color: ${(props) => props.theme.palette.neutral[1]};
`;

export const TimerContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const ReactionsContainer = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
`;

export const ReactionButton = styled.button`
	border: none;
	cursor: pointer;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
	color: ${(props) => props.theme.palette.neutral[1]};
`;

export const TagsContainer = styled.div`
	display: flex;
	gap: 8px;
	flex-direction: row;
	flex-wrap: wrap;
`;

interface TagProps {
	color: string;
	backgroundColor: string;
}

export const Tag = styled.span<TagProps>`
	height: 32px;
	padding: 4px 16px;
	border-radius: 4px;
	color: ${(props) => props.color};
	background-color: ${(props) => props.backgroundColor};

	gap: 8px;
	display: flex;
	flex-direction: row;
	align-items: center;
`;
