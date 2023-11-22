import { GetTasksQuery } from "../graphql";
import { ArrayItem } from "../types";

export type TaskItem = ArrayItem<GetTasksQuery["tasks"]>;

export interface TaskData {
	BACKLOG: TaskItem[];
	TODO: TaskItem[];
	IN_PROGRESS: TaskItem[];
	DONE: TaskItem[];
	CANCELLED: TaskItem[];
}

export function formatTasks(tasks: GetTasksQuery["tasks"]): TaskData {
	const newTaskList: TaskData = {
		BACKLOG: [],
		TODO: [],
		IN_PROGRESS: [],
		DONE: [],
		CANCELLED: [],
	};

	tasks.forEach((task) => {
		const status = task.status;
		const newTaskColumn = newTaskList[status];
		newTaskColumn.push(task);
		newTaskList[status] = newTaskColumn;
	});

	(Object.keys(newTaskList) as Array<keyof typeof newTaskList>).forEach((key) => {
		newTaskList[key].sort((a, b) => {
			return a.position > b.position ? 1 : -1;
		});
	});

	return newTaskList;
}
