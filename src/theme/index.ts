import { palette } from "./palette";
import { typography } from "./typography";

const theme = {
	palette,
	typography,
};

export type Theme = typeof theme;

export { theme };
