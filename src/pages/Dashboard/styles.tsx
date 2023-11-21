import styled from "styled-components";

export const Container = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: row;
	gap: 32px;
	overflow-x: auto;
	overflow-y: hidden;
`;

export const TaskColumn = styled.section`
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 348px;
`;

export const TaskList = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 16px;
	overflow-y: auto;
`;
