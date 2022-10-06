// Core
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

// Instruments
import { api } from '../api/api';
import { tagActions } from '../lib/redux/actions/tags';
import { getSelectedTagId } from '../lib/redux/selectors';

export const useTags = () => {
    const selectedTagId = useSelector(getSelectedTagId);
    const dispatch = useDispatch();
    const query = useQuery('tags', api.getTags);
    const { data, isFetched } = query;

    const setSelectedTagId = (id: string) => {
        dispatch(tagActions.setSelectedTagId(id));
    };

    useEffect(() => {
        if (!selectedTagId && query.data?.length) {
            setSelectedTagId(query.data[ 0 ].id);
        }
    }, [query.data]);

    return {
        data: Array.isArray(data) ? data : [],
        isFetched,
        setSelectedTagId,
        selectedTagId,
    };
};
