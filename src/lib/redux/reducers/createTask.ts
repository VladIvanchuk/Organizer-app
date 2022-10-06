// Types
import { AnyAction } from 'redux';
import { createTaskTypes } from '../types';

const initialState = {
    isCreateTaskOpen: false,
};

export const createTaskReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case createTaskTypes.SET_CREATE_TASK_OPEN: {
            return {
                ...state,
                isCreateTaskOpen: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
