/* eslint-disable no-use-before-define */
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: string; output: string };
};

export type CreateTaskInput = {
	assigneeId?: InputMaybe<Scalars["String"]["input"]>;
	dueDate: Scalars["DateTime"]["input"];
	name: Scalars["String"]["input"];
	pointEstimate: PointEstimate | `${PointEstimate}`;
	status: Status | `${Status}`;
	tags: Array<TaskTag | `${TaskTag}`>;
};

export type DeleteTaskInput = {
	id: Scalars["String"]["input"];
};

export type FilterTaskInput = {
	assigneeId?: InputMaybe<Scalars["String"]["input"]>;
	dueDate?: InputMaybe<Scalars["DateTime"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	ownerId?: InputMaybe<Scalars["String"]["input"]>;
	pointEstimate?: InputMaybe<PointEstimate | `${PointEstimate}`>;
	status?: InputMaybe<Status | `${Status}`>;
	tags?: InputMaybe<Array<TaskTag | `${TaskTag}`>>;
};

export type Mutation = {
	__typename?: "Mutation";
	createTask: Task;
	deleteTask: Task;
	updateTask: Task;
};

export type MutationCreateTaskArgs = {
	input: CreateTaskInput;
};

export type MutationDeleteTaskArgs = {
	input: DeleteTaskInput;
};

export type MutationUpdateTaskArgs = {
	input: UpdateTaskInput;
};

/** Estimate point for a task */
export const enum PointEstimate {
	Eight = "EIGHT",
	Four = "FOUR",
	One = "ONE",
	Two = "TWO",
	Zero = "ZERO",
}

export type Query = {
	__typename?: "Query";
	profile: User;
	tasks: Array<Task>;
	users: Array<User>;
};

export type QueryTasksArgs = {
	input: FilterTaskInput;
};

/** Status for Task */
export const enum Status {
	Backlog = "BACKLOG",
	Cancelled = "CANCELLED",
	Done = "DONE",
	InProgress = "IN_PROGRESS",
	Todo = "TODO",
}

export type Task = {
	__typename?: "Task";
	assignee?: Maybe<User>;
	createdAt: Scalars["DateTime"]["output"];
	creator: User;
	dueDate: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	pointEstimate: PointEstimate | `${PointEstimate}`;
	position: Scalars["Float"]["output"];
	status: Status | `${Status}`;
	tags: Array<TaskTag | `${TaskTag}`>;
};

/** Enum for tags for tasks */
export const enum TaskTag {
	Android = "ANDROID",
	Ios = "IOS",
	NodeJs = "NODE_JS",
	Rails = "RAILS",
	React = "REACT",
}

export type UpdateTaskInput = {
	assigneeId?: InputMaybe<Scalars["String"]["input"]>;
	dueDate?: InputMaybe<Scalars["DateTime"]["input"]>;
	id: Scalars["String"]["input"];
	name?: InputMaybe<Scalars["String"]["input"]>;
	pointEstimate?: InputMaybe<PointEstimate | `${PointEstimate}`>;
	position?: InputMaybe<Scalars["Float"]["input"]>;
	status?: InputMaybe<Status | `${Status}`>;
	tags?: InputMaybe<Array<TaskTag | `${TaskTag}`>>;
};

export type User = {
	__typename?: "User";
	avatar?: Maybe<Scalars["String"]["output"]>;
	createdAt: Scalars["DateTime"]["output"];
	email: Scalars["String"]["output"];
	fullName: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	type: UserType | `${UserType}`;
	updatedAt: Scalars["DateTime"]["output"];
};

/** Type of the User */
export const enum UserType {
	Admin = "ADMIN",
	Candidate = "CANDIDATE",
}

export type CreateTaskMutationVariables = Exact<{
	input: CreateTaskInput;
}>;

export type CreateTaskMutation = {
	__typename?: "Mutation";
	createTask: {
		__typename?: "Task";
		id: string;
		name: string;
		tags: Array<TaskTag>;
		status: Status;
		dueDate: string;
		position: number;
		pointEstimate: PointEstimate;
		assignee?: { __typename?: "User"; id: string; avatar?: string | null; fullName: string } | null;
	};
};

export type DeleteTaskMutationVariables = Exact<{
	input: DeleteTaskInput;
}>;

export type DeleteTaskMutation = {
	__typename?: "Mutation";
	deleteTask: { __typename?: "Task"; id: string };
};

export type MoveTaskMutationVariables = Exact<{
	input: UpdateTaskInput;
}>;

export type MoveTaskMutation = {
	__typename?: "Mutation";
	updateTask: {
		__typename?: "Task";
		id: string;
		name: string;
		tags: Array<TaskTag>;
		status: Status;
		dueDate: string;
		position: number;
		pointEstimate: PointEstimate;
		assignee?: { __typename?: "User"; id: string; avatar?: string | null; fullName: string } | null;
	};
};

export type UpdateTaskMutationVariables = Exact<{
	input: UpdateTaskInput;
}>;

export type UpdateTaskMutation = {
	__typename?: "Mutation";
	updateTask: {
		__typename?: "Task";
		id: string;
		name: string;
		tags: Array<TaskTag>;
		status: Status;
		dueDate: string;
		position: number;
		pointEstimate: PointEstimate;
		assignee?: { __typename?: "User"; id: string; avatar?: string | null; fullName: string } | null;
	};
};

export type GetProfileQueryVariables = Exact<{ [key: string]: never }>;

export type GetProfileQuery = {
	__typename?: "Query";
	profile: {
		__typename?: "User";
		id: string;
		avatar?: string | null;
		fullName: string;
		email: string;
		type: UserType;
		createdAt: string;
		updatedAt: string;
	};
};

export type GetTasksQueryVariables = Exact<{ [key: string]: never }>;

export type GetTasksQuery = {
	__typename?: "Query";
	tasks: Array<{
		__typename?: "Task";
		id: string;
		name: string;
		tags: Array<TaskTag>;
		status: Status;
		dueDate: string;
		position: number;
		pointEstimate: PointEstimate;
		assignee?: { __typename?: "User"; id: string; avatar?: string | null; fullName: string } | null;
	}>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
	__typename?: "Query";
	users: Array<{ __typename?: "User"; id: string; avatar?: string | null; fullName: string }>;
};

export const CreateTaskDocument = gql`
	mutation CreateTask($input: CreateTaskInput!) {
		createTask(input: $input) {
			id
			name
			tags
			status
			dueDate
			position
			pointEstimate
			assignee {
				id
				avatar
				fullName
			}
		}
	}
`;
export type CreateTaskMutationFn = Apollo.MutationFunction<
	CreateTaskMutation,
	CreateTaskMutationVariables
>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTaskMutation(
	baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(
		CreateTaskDocument,
		options,
	);
}
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<
	CreateTaskMutation,
	CreateTaskMutationVariables
>;
export const DeleteTaskDocument = gql`
	mutation DeleteTask($input: DeleteTaskInput!) {
		deleteTask(input: $input) {
			id
		}
	}
`;
export type DeleteTaskMutationFn = Apollo.MutationFunction<
	DeleteTaskMutation,
	DeleteTaskMutationVariables
>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTaskMutation(
	baseOptions?: Apollo.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(
		DeleteTaskDocument,
		options,
	);
}
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<
	DeleteTaskMutation,
	DeleteTaskMutationVariables
>;
export const MoveTaskDocument = gql`
	mutation MoveTask($input: UpdateTaskInput!) {
		updateTask(input: $input) {
			id
			name
			tags
			status
			dueDate
			position
			pointEstimate
			assignee {
				id
				avatar
				fullName
			}
		}
	}
`;
export type MoveTaskMutationFn = Apollo.MutationFunction<
	MoveTaskMutation,
	MoveTaskMutationVariables
>;

/**
 * __useMoveTaskMutation__
 *
 * To run a mutation, you first call `useMoveTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveTaskMutation, { data, loading, error }] = useMoveTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMoveTaskMutation(
	baseOptions?: Apollo.MutationHookOptions<MoveTaskMutation, MoveTaskMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<MoveTaskMutation, MoveTaskMutationVariables>(MoveTaskDocument, options);
}
export type MoveTaskMutationHookResult = ReturnType<typeof useMoveTaskMutation>;
export type MoveTaskMutationResult = Apollo.MutationResult<MoveTaskMutation>;
export type MoveTaskMutationOptions = Apollo.BaseMutationOptions<
	MoveTaskMutation,
	MoveTaskMutationVariables
>;
export const UpdateTaskDocument = gql`
	mutation UpdateTask($input: UpdateTaskInput!) {
		updateTask(input: $input) {
			id
			name
			tags
			status
			dueDate
			position
			pointEstimate
			assignee {
				id
				avatar
				fullName
			}
		}
	}
`;
export type UpdateTaskMutationFn = Apollo.MutationFunction<
	UpdateTaskMutation,
	UpdateTaskMutationVariables
>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTaskMutation(
	baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(
		UpdateTaskDocument,
		options,
	);
}
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<
	UpdateTaskMutation,
	UpdateTaskMutationVariables
>;
export const GetProfileDocument = gql`
	query GetProfile {
		profile {
			id
			avatar
			fullName
			email
			type
			createdAt
			updatedAt
		}
	}
`;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileQuery(
	baseOptions?: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
}
export function useGetProfileLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(
		GetProfileDocument,
		options,
	);
}
export function useGetProfileSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetProfileQuery, GetProfileQueryVariables>(
		GetProfileDocument,
		options,
	);
}
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileSuspenseQueryHookResult = ReturnType<typeof useGetProfileSuspenseQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const GetTasksDocument = gql`
	query GetTasks {
		tasks(input: {}) {
			id
			name
			tags
			status
			dueDate
			position
			pointEstimate
			creator {
				id
				avatar
				fullName
			}
			assignee {
				id
				avatar
				fullName
			}
		}
	}
`;

/**
 * __useGetTasksQuery__
 *
 * To run a query within a React component, call `useGetTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTasksQuery(
	baseOptions?: Apollo.QueryHookOptions<GetTasksQuery, GetTasksQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
}
export function useGetTasksLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetTasksQuery, GetTasksQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
}
export function useGetTasksSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetTasksQuery, GetTasksQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
}
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksLazyQueryHookResult = ReturnType<typeof useGetTasksLazyQuery>;
export type GetTasksSuspenseQueryHookResult = ReturnType<typeof useGetTasksSuspenseQuery>;
export type GetTasksQueryResult = Apollo.QueryResult<GetTasksQuery, GetTasksQueryVariables>;
export const GetUsersDocument = gql`
	query GetUsers {
		users {
			id
			avatar
			fullName
		}
	}
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
	baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export function useGetUsersLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export function useGetUsersSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
