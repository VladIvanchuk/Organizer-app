// Core
import axios from 'axios';
import { ITagModel } from '../types/TagModel';

export const tagsApi = Object.freeze({
    async getTags(): Promise<ITagModel[]> {
        const { data: tags } = await axios.get<ITagModel[]>(
            `${process.env.REACT_APP_API_URL}/tags`,
        );

        return tags;
    },
});
