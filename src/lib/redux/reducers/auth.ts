import { AnyAction } from 'redux';
// Types
import { authTypes } from '../types';

const initialState = {
    token:        '',
    errorMessage: '',
    error:        false,
};

export const authReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case authTypes.SET_TOKEN: {
            return {
                ...state,
                token:        action.payload,
                error:        false, // очищаем старый статус об ошибке
                errorMessage: '', // очищаем старое сообщение об ошибке
            };
        }
        case authTypes.SET_ERROR: {
            return {
                ...state,
                errorMessage: action.payload,
                error:        true,
            };
        }
        case authTypes.RESET_ERROR: {
            return {
                ...state,
                errorMessage: '',
                error:        false,
            };
        }

        default: {
            return state;
        }
    }
};
