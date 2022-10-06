import axios, { AxiosResponse } from 'axios';
import { ITasksModel } from '../types/todo';


export const tasksApi = Object.freeze({
    get token() {
        return localStorage.getItem('token');
    },
    async postTodo(todo: ITasksModel) {
        const { data } = await axios.post(
            `${process.env.REACT_APP_API_URL}/tasks`,
            todo,
            {
                headers: {
                    Authorization: `Bearer ${tasksApi.token}`,
                },
            },

        );

        return data;
    },
    async getTasks(): Promise<ITasksModel> {
        const { data } = await axios.get<AxiosResponse<ITasksModel>>(
            `${process.env.REACT_APP_API_URL}/tasks`,
            {
                headers: {
                    Authorization: `Bearer ${tasksApi.token}`,
                },
            },
        );

        return data?.data;
    },
    async getTaskById(id: string): Promise<ITasksModel> {
        const { data } = await axios.get<AxiosResponse<ITasksModel>>(
            `${process.env.REACT_APP_API_URL}/tasks/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${tasksApi.token}`,
                },
            },
        );

        return data?.data;
    },
    async updateTaskById(todo: ITasksModel, id: string) {
        const { data } = await axios.put(
            `${process.env.REACT_APP_API_URL}/tasks/${id}`,
            todo,
            {
                headers: {
                    Authorization: `Bearer ${tasksApi.token}`,
                },
            },
        );

        return data;
    },
    async deleteTaskById(id: string) {
        await axios.delete(
            `${process.env.REACT_APP_API_URL}/tasks/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${tasksApi.token}`,
                },
            },
        );
    },
});
