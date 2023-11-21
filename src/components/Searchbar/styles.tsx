import styled from "styled-components";

export const Container = styled.div`
	padding: 12px 24px;
	border-radius: 16px;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 24px;
	color: ${(props) => props.theme.palette.neutral[2]};
	background-color: ${(props) => props.theme.palette.neutral[4]};
`;

export const Input = styled.input`
	width: 100%;
	border: none;
	background-color: transparent;
	color: ${(props) => props.theme.palette.neutral[1]};

	font-size: ${(props) => props.theme.typography.desktop.body.md.fontSize}px;
	line-height: ${(props) => props.theme.typography.desktop.body.md.lineHeight}px;
	letter-spacing: ${(props) => props.theme.typography.desktop.body.md.letterSpacing}px;

	&:focus {
		outline: none;
	}

	&::placeholder {
		color: ${(props) => props.theme.palette.neutral[2]};
		font-size: ${(props) => props.theme.typography.desktop.body.md.fontSize}px;
		line-height: ${(props) => props.theme.typography.desktop.body.md.lineHeight}px;
		letter-spacing: ${(props) => props.theme.typography.desktop.body.md.letterSpacing}px;
	}
`;

export const IconButton = styled.button`
	width: 24px;
	border: none;
	cursor: pointer;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.palette.neutral[2]};
`;
