import { createTaskTypes } from '../types';

export const createTaskActions = Object.freeze({
    setCreateTaskOpen: (isCreateTaskOpen: boolean) => {
        return {
            type:    createTaskTypes.SET_CREATE_TASK_OPEN,
            payload: isCreateTaskOpen,
        };
    },
});
