import { RootState } from '../init/store';

export const getSelectedTagId = (state: RootState): string => {
    return state.tags.selectedTagId;
};
