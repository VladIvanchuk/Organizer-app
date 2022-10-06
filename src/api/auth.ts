import axios, { AxiosResponse } from 'axios';
// Core
import { ILogin, ISignUpWithToken } from '../types/auth';
import { ISignUp } from '../components/forms/SignUpForm/config';
import { ILoginFormShape } from '../components/types';


export const authApi = Object.freeze({
    get token() {
        return localStorage.getItem('token');
    },
    async signUp(user: ISignUp): Promise<ISignUpWithToken> {
        const { data: newUser } = await axios.post<ISignUp, AxiosResponse<ISignUpWithToken>>(
            `${process.env.REACT_APP_API_URL}/auth/registration`,
            user,
        );

        return newUser;
    },
    async login(credentials: ILoginFormShape): Promise<ILogin> {
        const { email, password } = credentials;
        const { data } = await axios.get<ILogin>(
            `${process.env.REACT_APP_API_URL}/auth/login`,
            {
                headers: {
                    Authorization: `Basic ${window.btoa(`${email}:${password}`)}`,
                },
            },
        );

        return data;
    },
    async logout() {
        const { data } = await axios.get(
            `${process.env.REACT_APP_API_URL}/auth/logout`,
            {
                headers: {
                    Authorization: `Bearer ${authApi.token}`,
                },
            },
        );

        return data;
    },
});
