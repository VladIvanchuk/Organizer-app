import { RootState } from '../init/store';

export const getAllTask = (state: RootState): string => {
    return state.tasks.allTasks;
};
export const getTask = (state: RootState): {} => {
    return state.tasks.task;
};
export const getIsTaskOpen = (state: RootState): string => {
    return state.tasks.IsTaskOpen;
};
export const getSelectedTask = (state: RootState): string => {
    return state.tasks.selectedTask;
};
