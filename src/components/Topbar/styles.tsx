import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
	padding-top: 4px;
	padding-bottom: 4px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const SwitchContainer = styled.div`
	margin-left: 8px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const Button = css`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	padding: 8px;
	border-radius: 8px;
	border-width: 1px;
	border-style: solid;
	color: ${(props) => props.theme.palette.neutral[1]};
`;

export const SwitchButton = styled(NavLink)`
	${Button}
	position: relative;
	border-color: transparent;

	&.active {
		color: ${(props) => props.theme.palette.primary[4]};
	}
`;

export const IconButton = styled.button`
	${Button}
	border-color: ${(props) => props.theme.palette.primary[4]};
	background-color: ${(props) => props.theme.palette.primary[4]};
`;

export const Indicator = styled(motion.div)`
	inset: -1px;
	position: absolute;
	border-radius: 8px;
	border: 1px solid ${(props) => props.theme.palette.primary[4]};
`;
