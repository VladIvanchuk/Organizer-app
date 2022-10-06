import { RootState } from '../init/store';

export const getIsCreateTaskOpen = (state: RootState): boolean => {
    return state.createTask.isCreateTaskOpen;
};
