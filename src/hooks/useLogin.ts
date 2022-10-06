import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ILoginFormShape } from '../components/types';
import { api } from '../api/api';
import { authActions } from '../lib/redux/actions/auth';

export const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mutation = useMutation((credentials: ILoginFormShape) => {
        return api.login(credentials);
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            const data = mutation.data?.data;
            dispatch(authActions.setToken(data));
            localStorage.setItem('token', data);
            navigate('/todo/task-manager');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
