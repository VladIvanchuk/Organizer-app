import {  useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    getAllTask, getSelectedTask,
} from '../lib/redux/selectors/tasks';

import { api } from '../api/api';

import { createTaskActions, taskActions } from '../lib/redux/actions';
import { ITasksModel } from '../types/todo';

export const useTasks = () => {
    const selectedTask = useSelector(getSelectedTask);
    const allTasks = useSelector(getAllTask);
    const dispatch = useDispatch();
    const query = useQuery('tasks', api.getTasks);
    const { data, isSuccess } = query;

    const setSelectedTask = (task: {}) => {
        dispatch(taskActions.setSelectedTask(task));
    };
    const setIsTaskOpen = (value: boolean) => {
        dispatch(taskActions.setIsTaskOpen(value));
    };
    const setCreateTaskOpen = (value: boolean) => {
        dispatch(createTaskActions.setCreateTaskOpen(value));
    };

    const setTasks = (Task: ITasksModel) => {
        dispatch(taskActions.setTask(Task));
    };
    const updateTask = (Task: ITasksModel) => {
        dispatch(taskActions.updateTask(Task));
    };
    const removeTask = (Task: ITasksModel) => {
        dispatch(taskActions.removeTask(Task));
    };

    useEffect(() => {
        if (isSuccess) {
            // @ts-ignore
            dispatch(taskActions.setAllTasks(data));
        }
    }, [data]);


    return {
        selectedTask,
        setCreateTaskOpen,
        setIsTaskOpen,
        setSelectedTask,
        setTasks,
        allTasks,
        updateTask,
        removeTask,
    };
};
