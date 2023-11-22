import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	padding: 16px;
	border-radius: 16px;
	background-color: ${(props) => props.theme.palette.neutral[4]};
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
`;

export const FieldContainer = styled.div`
	display: grid;
	gap: 16px;
	align-items: flex-start;
	justify-items: center;
	text-align: center;
	grid-template-columns: repeat(5, 1fr);
`;
