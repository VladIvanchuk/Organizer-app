// API
import { tagsApi } from './tags';
import { authApi } from './auth';
import { tasksApi } from './tasks';


export const api = {
    ...tagsApi,
    ...authApi,
    ...tasksApi,
};
