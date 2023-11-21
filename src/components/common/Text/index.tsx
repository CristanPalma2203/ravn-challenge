import styled from "styled-components";

interface TextProps {
	color?: string;
	size: "xl" | "lg" | "md" | "sm";
	variant: "display" | "body";
	weight: "regular" | "bold";
}

const fontWeight = {
	bold: 600,
	regular: 400,
};

export const Text = styled.span<TextProps>`
	color: ${(props) => props.color || "inherit"};
	font-size: ${(p) => p.theme.typography.desktop[p.variant][p.size].fontSize}px;
	line-height: ${(p) => p.theme.typography.desktop[p.variant][p.size].lineHeight}px;
	letter-spacing: ${(p) => p.theme.typography.desktop[p.variant][p.size].letterSpacing}px;
	font-weight: ${(props) => fontWeight[props.weight]};
	font-family: sans-serif;
`;
