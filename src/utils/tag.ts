import { theme } from "../theme";
import { TaskTag } from "../graphql";

const tagFontColors = {
	[TaskTag.Ios]: theme.palette.secondary[4],
	[TaskTag.React]: "#2f61bf",
	[TaskTag.Rails]: theme.palette.primary[4],
	[TaskTag.NodeJs]: theme.palette.neutral[1],
	[TaskTag.Android]: theme.palette.tertiary[4],
};

const tagBackgroundColors = {
	[TaskTag.Ios]: "#70b25219",
	[TaskTag.React]: "#2f61bf19",
	[TaskTag.Rails]: "#da584b19",
	[TaskTag.NodeJs]: "#94979a19",
	[TaskTag.Android]: "#70b25219",
};

export function getTagFontColor(taskTag: TaskTag): string {
	return tagFontColors[taskTag];
}

export function getTagBackgroundColor(tag: TaskTag): string {
	return tagBackgroundColors[tag];
}
