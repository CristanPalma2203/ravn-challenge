import { theme } from "../theme";

const dueDateFontColor = {
	due: theme.palette.neutral[1],
	almost: theme.palette.tertiary[4],
	overdue: theme.palette.primary[4],
};

const dueDateBackgroundColor = {
	due: "#94979a19",
	almost: "#70b25219",
	overdue: "#da584b19",
};

const dueDateIndicatorColor = {
	due: theme.palette.secondary[4],
	almost: theme.palette.tertiary[4],
	overdue: theme.palette.primary[4],
};

function getDateDiff(date: string): number {
	const today = new Date();
	const dateTime = new Date(date);
	const day = 1000 * 60 * 60 * 24;
	return Math.trunc((today.getTime() - dateTime.getTime()) / day) * -1;
}

export function formatDate(date?: string) {
	if (!date) return "N/A";

	const options: Intl.DateTimeFormatOptions = {
		day: "numeric",
		month: "short",
		year: "numeric",
	};

	const dateTime = new Date(date);

	return dateTime.toLocaleDateString("en", options).toUpperCase();
}

export function formatDueDate(dueDate: string): string {
	const timeLeft = getDateDiff(dueDate);

	if (timeLeft === 0) {
		return "TODAY";
	}
	if (timeLeft === 1) {
		return "TOMORROW";
	}
	if (timeLeft === -1) {
		return "YESTERDAY";
	}

	const formattedDueDate = formatDate(dueDate);

	return formattedDueDate;
}

export function getDueDateFontColor(dueDate: string): string {
	const timeLimit = 0;
	const timeLeft = getDateDiff(dueDate);

	if (timeLeft < timeLimit) {
		return dueDateFontColor.overdue;
	} else if (timeLeft < 2) {
		return dueDateFontColor.almost;
	} else {
		return dueDateFontColor.due;
	}
}

export function getDueDateBackgroundColor(dueDate: string): string {
	const timeLimit = 0;
	const timeLeft = getDateDiff(dueDate);

	if (timeLeft < timeLimit) {
		return dueDateBackgroundColor.overdue;
	} else if (timeLeft < 2) {
		return dueDateBackgroundColor.almost;
	} else {
		return dueDateBackgroundColor.due;
	}
}

export function getDueDateIndicatorColor(dueDate: string): string {
	const timeLimit = 0;
	const timeLeft = getDateDiff(dueDate);

	if (timeLeft < timeLimit) {
		return dueDateIndicatorColor.overdue;
	} else if (timeLeft < 2) {
		return dueDateIndicatorColor.almost;
	} else {
		return dueDateIndicatorColor.due;
	}
}
