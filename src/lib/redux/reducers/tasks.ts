import { AnyAction } from 'redux';
// Types
import { tasksTypes } from '../types';

const initialState = {
    allTasks:     null,
    task:         [],
    IsTaskOpen:   null,
    selectedTask: null,
};

export const tasksReducer = (state = initialState, { payload, type, index }: AnyAction) => {
    switch (type) {
        case tasksTypes.SET_ALL_TASKS: {
            return {
                ...state,
                allTasks: payload,
            };
        }
        case tasksTypes.SET_TASK: {
            return {
                ...state,
                allTasks: [...state.task, payload],
            };
        }
        case tasksTypes.UPDATE_TASK: {
            return {
                ...state,
                // @ts-ignore
                // eslint-disable-next-line no-confusing-arrow
                allTasks: state.allTasks.map((n) => n.id === payload.id ? payload : n),
            };
        }
        case tasksTypes.REMOVE_TASK: {
            return {
                ...state,
                // @ts-ignore
                // eslint-disable-next-line no-confusing-arrow
                allTasks: state.allTasks
                    .slice(0, index)
                // @ts-ignore
                    .concat(state.allTasks.slice(index + 1)),
            };
        }
        case tasksTypes.SET_SELECTED_TASK_OPEN: {
            return {
                ...state,
                IsTaskOpen: payload,
            };
        }
        case tasksTypes.SET_SELECTED_TASK: {
            return {
                ...state,
                selectedTask: payload,
            };
        }

        default: {
            return state;
        }
    }
};
