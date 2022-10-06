import * as yup from 'yup';
import { INewTodoShape } from '../../types';
// Core

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'минимальная длина — ${min} символов';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина — ${max} символов';

export const schema: yup.SchemaOf<INewTodoShape> = yup.object().shape({
    title: yup
        .string()
        .min(3, tooShortMessage)
        .max(20, tooLongMessage)
        .required('Минимальная длина поля title — 3'),
    description: yup
        .string()
        .min(3, tooShortMessage)
        .max(100, tooLongMessage)
        .required('Минимальная длина поля description — 3'),
});
