// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink } from 'react-router-dom';
import { schema } from './config';


// Components
import { Input } from '../../elements/input';
import { useLogin } from '../../../hooks/useLogin';
import { ILoginFormShape } from '../../types';


export const LoginForm: React.FC = () => {
    const login = useLogin();


    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (credentials: ILoginFormShape) => {
        await login.mutateAsync(credentials);
        form.reset();
    });

    return (
        <section className = 'sign-form'>
            <form onSubmit = { onSubmit }>
                <fieldset>
                    <legend>Вход</legend>
                    <Input
                        placeholder = 'Электропочта'
                        type = 'email'
                        error = { form.formState.errors.email }
                        register = { form.register('email') } />

                    <Input
                        placeholder = 'Пароль'
                        type = 'password'
                        error = { form.formState.errors.password }
                        register = { form.register('password') } />
                    <input
                        className = 'button-login' type = 'submit'
                        value = 'Войти' />
                </fieldset>
                <p>Если у вас до сих пор нет учётной записи, вы можете <NavLink to = '/todo/signup'>зарегистрироваться</NavLink>.
                </p>
            </form>
        </section>
    );
};
