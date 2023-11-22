import * as yup from "yup";
import { useState } from "react";
import { toast } from "react-toastify";
import { createPortal } from "react-dom";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { Text } from "../common/Text";
import { Avatar } from "../common/Avatar";
import { formatDate } from "../../utils/date";
import { Controller, useForm } from "react-hook-form";
import { useTaskModal } from "../../context/taskModal/TaskModalContext";
import { formatPointEstimate } from "../../utils/pointEstimate";
import {
	RiUser3Fill as UserIcon,
	RiPriceTag3Fill as TagIcon,
	RiCalendarCheckLine as DateIcon,
	RiIncreaseDecreaseFill as EstimateIcon,
} from "react-icons/ri";
import {
	Status,
	TaskTag,
	PointEstimate,
	useCreateTaskMutation,
	useUpdateTaskMutation,
	useGetUsersQuery,
	GetTasksDocument,
	GetTasksQuery,
} from "../../graphql";
import {
	ActionsContainer,
	Backdrop,
	CancelButton,
	FormContainer,
	CreateButton,
	TagButton,
	TagButtonContainer,
	TagsContainer,
	TitleInput,
	Menu,
	MenuTitle,
	MenuOption,
	Checkbox,
} from "./styles";

function TaskModal() {
	const container = document.getElementById("modal_test") as HTMLDivElement;
	return createPortal(<Modal />, container);
}

interface FormData {
	name: string;
	tags: string[];
	dueDate: string;
	assigneeId: string;
	pointEstimate: string;
}

const schema = yup.object({
	name: yup.string().required("Task name is required"),
	tags: yup.array().of(yup.string()).min(1, "At least one tag is required"),
	dueDate: yup.date().required("Due date is required"),
	assigneeId: yup.string().required("Assignee is required"),
	pointEstimate: yup.string().required("Point estimate is required"),
});

const pointEstimateOptions: PointEstimate[] = [
	PointEstimate.Zero,
	PointEstimate.One,
	PointEstimate.Two,
	PointEstimate.Four,
	PointEstimate.Eight,
];

const taskTagOptions: TaskTag[] = [
	TaskTag.Ios,
	TaskTag.React,
	TaskTag.Rails,
	TaskTag.NodeJs,
	TaskTag.Android,
];

function Modal() {
	const { task, closeFormModal } = useTaskModal();
	const [openMenu, setOpenMenu] = useState("");

	const { data: usersData } = useGetUsersQuery();
	const [updateTask] = useUpdateTaskMutation();
	const [createTask] = useCreateTaskMutation({
		update: (cache, result) => {
			const data = cache.readQuery<GetTasksQuery>({
				query: GetTasksDocument,
			});
			const tasks = data?.tasks;
			const newTask = result.data?.createTask;
			if (tasks && newTask) {
				cache.writeQuery<GetTasksQuery>({
					query: GetTasksDocument,
					data: {
						tasks: [...tasks, newTask],
					},
				});
			}
		},
	});

	const { control, register, handleSubmit, watch, setValue } = useForm<FormData>({
		resolver: yupResolver(schema),
		defaultValues: {
			name: task?.name || "",
			tags: task?.tags || [],
			dueDate: task?.dueDate || "",
			assigneeId: task?.assignee?.id || "",
			pointEstimate: task?.pointEstimate || "",
		},
	});

	const handleOpenMenu = (menu: string) => () => {
		setOpenMenu((prev) => (prev === menu ? "" : menu));
	};

	const handleFormErrors = () => {
		toast.error("Please fill all required fields", { toastId: "task-modal-error" });
	};

	const handleCreateTask = async (formData: FormData) => {
		try {
			const assignee = usersData?.users.find((user) => user.id === formData.assigneeId);

			await createTask({
				variables: {
					input: {
						name: formData.name,
						status: Status.Backlog,
						dueDate: formData.dueDate,
						assigneeId: formData.assigneeId,
						tags: formData.tags as TaskTag[],
						pointEstimate: formData.pointEstimate as PointEstimate,
					},
				},
				optimisticResponse: {
					__typename: "Mutation",
					createTask: {
						__typename: "Task",
						id: uuidv4(),
						position: 1.0,
						name: formData.name,
						status: Status.Backlog,
						dueDate: formData.dueDate,
						tags: formData.tags as TaskTag[],
						pointEstimate: formData.pointEstimate as PointEstimate,
						assignee: {
							__typename: "User",
							id: formData.assigneeId,
							avatar: assignee?.avatar,
							fullName: assignee?.fullName || "-",
						},
					},
				},
			});

			toast.success("Task Created");
			closeFormModal();
		} catch (e) {
			console.log(e);
			toast.error("Error creating task" + e, { toastId: "task-modal-error" });
		}
	};

	const handleUpdateTask = async (formData: FormData) => {
		try {
			if (!task) {
				throw new Error("Task not found");
			}
			console.log("test");
			const assignee = usersData?.users.find((user) => user.id === formData.assigneeId);
			console.log(assignee);
			await updateTask({
				variables: {
					input: {
						id: task.id,
						status: task.status,
						position: task.position,
						name: formData.name,
						dueDate: formData.dueDate,
						assigneeId: formData.assigneeId,
						tags: formData.tags as TaskTag[],
						pointEstimate: formData.pointEstimate as PointEstimate,
					},
				},
				optimisticResponse: {
					__typename: "Mutation",
					updateTask: {
						__typename: "Task",
						id: task.id,
						name: formData.name,
						status: task.status,
						position: task.position,
						dueDate: formData.dueDate,
						tags: formData.tags as TaskTag[],
						pointEstimate: formData.pointEstimate as PointEstimate,
						assignee: {
							__typename: "User",
							id: formData.assigneeId,
							avatar: assignee?.avatar,
							fullName: assignee?.fullName || "-",
						},
					},
				},
			});
			toast.success("Task Updated");
			closeFormModal();
		} catch {
			toast.error("Task not found");
		}
	};

	return (
		<Backdrop
			onClick={closeFormModal}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<FormContainer
				initial={{ y: "-100vh", opacity: 0 }}
				animate={{ y: "0", opacity: 1 }}
				exit={{ y: "100vh", opacity: 0 }}
				onClick={(e) => e.stopPropagation()}
				onSubmit={handleSubmit(task ? handleUpdateTask : handleCreateTask, handleFormErrors)}
			>
				<TitleInput placeholder="Task Title" defaultValue={task?.name} {...register("name")} />
				<TagsContainer>
					<TagButtonContainer>
						<TagButton onClick={handleOpenMenu("estimate")}>
							<EstimateIcon size={24} />
							<Text size="md" variant="body" weight="regular">
								{watch("pointEstimate")
									? formatPointEstimate(watch("pointEstimate") as PointEstimate)
									: "Estimate"}
							</Text>
						</TagButton>
						<Menu isOpen={openMenu === "estimate"}>
							<MenuTitle>Estimate</MenuTitle>
							{pointEstimateOptions.map((pointEstimate) => (
								<MenuOption
									key={pointEstimate}
									onClick={() => setValue("pointEstimate", pointEstimate)}
								>
									<EstimateIcon size={24} />
									<span>{formatPointEstimate(pointEstimate)}</span>
								</MenuOption>
							))}
						</Menu>
					</TagButtonContainer>
					<TagButtonContainer>
						<TagButton onClick={handleOpenMenu("assignee")}>
							{watch("assigneeId") ? (
								<Avatar
									size={24}
									src={usersData?.users.find((user) => user.id === watch("assigneeId"))?.avatar}
								/>
							) : (
								<UserIcon size={24} />
							)}
							<Text
								size="md"
								variant="body"
								weight="regular"
								style={{ overflow: "hidden", textOverflow: "ellipsis" }}
							>
								{watch("assigneeId")
									? usersData?.users.find((user) => user.id === watch("assigneeId"))?.fullName
									: "Assignee"}
							</Text>
						</TagButton>
						<Menu isOpen={openMenu === "assignee"}>
							<MenuTitle>Assign to...</MenuTitle>
							{usersData?.users.map((user) => (
								<MenuOption key={user.id} onClick={() => setValue("assigneeId", user.id)}>
									<Avatar src={user.avatar} size={32} />
									<span>{user.fullName}</span>
								</MenuOption>
							))}
						</Menu>
					</TagButtonContainer>
					<TagButtonContainer>
						<TagButton onClick={handleOpenMenu("tag")}>
							<TagIcon size={24} />
							<Text
								size="md"
								variant="body"
								weight="regular"
								style={{ overflow: "hidden", textOverflow: "ellipsis" }}
							>
								Label {!!watch("tags")?.length && `(${watch("tags")?.length})`}
							</Text>
						</TagButton>
						<Menu isOpen={openMenu === "tag"}>
							<MenuTitle>Tag Title</MenuTitle>
							{taskTagOptions.map((tag) => (
								<MenuOption key={tag} onClick={() => register("assigneeId")}>
									<Checkbox value={tag} {...register("tags")} />
									<span>{tag}</span>
								</MenuOption>
							))}
						</Menu>
					</TagButtonContainer>
					<TagButtonContainer>
						<Controller
							name="dueDate"
							control={control}
							render={({ field }) => (
								<DatePicker
									open={openMenu === "date"}
									onInputClick={handleOpenMenu("date")}
									selected={new Date(field.value || new Date().toISOString())}
									onChange={(date) => {
										field.onChange(date?.toISOString());
									}}
									customInput={
										<TagButton>
											<DateIcon size={24} />
											<Text
												size="md"
												variant="body"
												weight="regular"
												style={{ overflow: "hidden", textOverflow: "ellipsis" }}
											>
												{watch("dueDate") ? formatDate(watch("dueDate")) : "Due Date"}
											</Text>
										</TagButton>
									}
								/>
							)}
						/>
					</TagButtonContainer>
				</TagsContainer>
				<ActionsContainer>
					<CancelButton type="button" onClick={closeFormModal}>
						<Text size="md" variant="body" weight="regular">
							Cancel
						</Text>
					</CancelButton>
					<CreateButton type="submit" className="font-md-regular">
						<Text size="md" variant="body" weight="regular">
							{task ? "Update" : "Create"}
						</Text>
					</CreateButton>
				</ActionsContainer>
			</FormContainer>
		</Backdrop>
	);
}

export { TaskModal };
