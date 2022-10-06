// Core
import { combineReducers } from 'redux';

// Reducers
import {
    authReducer as auth,
    createTaskReducer as createTask,
    tagsReducer as tags,
    tasksReducer as tasks,

} from '../reducers';

export const rootReducer = combineReducers({
    createTask,
    tags,
    auth,
    tasks,
});
