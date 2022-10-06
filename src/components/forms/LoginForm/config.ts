import * as yup from 'yup';
import { ILoginFormShape } from '../../types';
// Core

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'минимальная длина — ${min} символов';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина — ${max} символов';

export const schema: yup.SchemaOf<ILoginFormShape> = yup.object().shape({
    email: yup
        .string()
        .email()
        .required('Поле email обязательно для заполнения'),
    password: yup
        .string()
        .min(8, tooShortMessage)
        .max(16, tooLongMessage)
        .required('минимальная длина — 8 символов'),
});
