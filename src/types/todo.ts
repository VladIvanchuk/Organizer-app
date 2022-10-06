export interface ITodoModel {
    completed: boolean;
    title: string;
    description: string;
    deadline: string;
    tag: string;
    token?: string;
}
export type AuthHeader = {
    headers?: {
        authorization: string;
    }
};
export interface ITasksModel {
    id: string,
    completed: boolean,
    title: string,
    description: string,
    deadline: string,
    tag: {
        id: string,
        name: string,
        color: string,
        bg: string;
    },
}
