import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Container = styled(NavLink)`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20px;
	padding: 16px 20px;
	transition: 0.3s;
	text-decoration: none;
	background-color: transparent;
	color: ${(props) => props.theme.palette.neutral[2]};

	&:hover {
		color: ${(props) => props.theme.palette.primary[4]};
	}

	&.active {
		color: ${(props) => props.theme.palette.primary[4]};
	}
`;

export const Indicator = styled(motion.div)`
	inset: 0;
	position: absolute;
	border-right: 4px solid ${(props) => props.theme.palette.primary[4]};
	background-image: linear-gradient(to right, #ba252500 0%, #d24d4d19 100%);
`;
