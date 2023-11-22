import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Backdrop = styled(motion.div)`
	inset: 0;
	display: flex;
	position: fixed;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled(motion.div)`
	gap: 16px;
	width: 375px;
	padding: 16px;
	display: flex;
	border-radius: 8px;
	flex-direction: column;
	background-color: ${(props) => props.theme.palette.neutral[3]};
`;

export const Button = css`
	padding: 8px;
	border-radius: 8px;
	color: ${(props) => props.theme.palette.neutral[1]};
`;

export const ActionsContainer = styled.div`
	gap: 24px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

export const CancelButton = styled.button`
	${Button}
	background-color: transparent;

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

export const DeleteButton = styled.button`
	${Button}
	background-color:  ${(props) => props.theme.palette.primary[4]};
`;
