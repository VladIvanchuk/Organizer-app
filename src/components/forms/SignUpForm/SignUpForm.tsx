// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { schema } from './config';
import { ISignUpFormShape } from '../../types';


// Components
import { Input } from '../../elements/input';
import { useSignUp } from '../../../hooks/useSignUp';


export const SignUpForm: React.FC = () => {
    const signUp = useSignUp();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (data: ISignUpFormShape) => {
        const { confirmPassword, ...newUser } = data;
        await signUp.mutateAsync(newUser);
        form.reset();
    });

    return (
        <section className = 'publish-tip sign-form'>
            <form onSubmit = { onSubmit }>
                <fieldset>
                    <legend>Регистрация</legend>
                    <Input
                        placeholder = 'Имя и фамилия'
                        error = { form.formState.errors.name }
                        register = { form.register('name') } />
                    <Input
                        placeholder = 'Электропочта'
                        error = { form.formState.errors.email }
                        register = { form.register('email') } />
                    <Input
                        placeholder = 'Пароль'
                        type = 'password'
                        error = { form.formState.errors.password }
                        register = { form.register('password') } />
                    <Input
                        placeholder = 'Подтверждение пароля'
                        type = 'password'
                        error = { form.formState.errors.confirmPassword }
                        register = { form.register('confirmPassword') } />
                    <input
                        className = 'button-login' type = 'submit'
                        value = 'Зарегистрироваться' />
                </fieldset>
                <p>Перейти к <Link to = '/todo/login'>логину</Link>.</p>
            </form>
        </section>
    );
};
