import { tagTypes } from '../types';

export const tagActions = Object.freeze({
    setSelectedTagId: (selectedTagId: string) => {
        return {
            type:    tagTypes.SET_SELECTED_TAG_ID,
            payload: selectedTagId,
        };
    },
});
