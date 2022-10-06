import { ITasksModel } from '../../../types/todo';
import { tasksTypes } from '../types';

export const taskActions = Object.freeze({
    setAllTasks: (task: ITasksModel) => {
        return {
            type:    tasksTypes.SET_ALL_TASKS,
            payload: task,
        };
    },
    setTask: (task: {}) => {
        return {
            type:    tasksTypes.SET_TASK,
            payload: task,
        };
    },
    updateTask: (task: {}) => {
        return {
            type:    tasksTypes.UPDATE_TASK,
            payload: task,
        };
    },
    removeTask: (task: {}) => {
        return {
            type:    tasksTypes.REMOVE_TASK,
            payload: task,
        };
    },
    setIsTaskOpen: (IsTaskOpen: boolean) => {
        return {
            type:    tasksTypes.SET_SELECTED_TASK_OPEN,
            payload: IsTaskOpen,
        };
    },
    setSelectedTask: (selectedTask: {}) => {
        return {
            type:    tasksTypes.SET_SELECTED_TASK,
            payload: selectedTask,
        };
    },
});
