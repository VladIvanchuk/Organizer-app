// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { useState } from 'react';
import { schema } from './config';

// Components
import { TaskInput } from '../../elements/taskInput';
import { useTags } from '../../../hooks/useTags';
import { Tag } from '../../Tag';
import { ITasksModel } from '../../../types/todo';
import { useTasks } from '../../../hooks/useTasks';
import { api } from '../../../api/api';


export const NewTaskCard: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { data, selectedTagId } = useTags();
    const { setTasks, setCreateTaskOpen  } = useTasks();

    registerLocale('ru', ru);

    const tagsJSX = data.map((tag) => (
        <Tag key = { tag.id } { ...tag } />
    ));

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),

    });

    const add = () => {
        form.register('completed', { value: false });
        form.register('deadline', { value: selectedDate });
        form.register('tag', { value: selectedTagId });
    };

    const publish = form.handleSubmit(async (newTodo: ITasksModel) => {
        await api.postTodo(newTodo)
            .then((newTask) => {
                // @ts-ignore
                return setTasks(newTask.data);
            });
        setCreateTaskOpen(false);
        form.reset();
    });

    return (
        <form onSubmit = { publish }>
            <div className = 'head'></div>
            <div className = 'content'>
                <TaskInput
                    className = 'title'
                    label = 'Задачи'
                    placeholder = 'Пройти интенсив по React + Redux + TS + Mobx'
                    type = 'text'
                    name = 'title'
                    error = { form.formState.errors.title }
                    register = { form.register('title') } />
                <div className = 'deadline'>
                    <span className = 'label'>Дедлайн</span>
                    <span className = 'date'>
                        <div className = 'react-datepicker-wrapper'>
                            <div className = 'react-datepicker__input-container'>
                                <ReactDatePicker
                                    selected = { selectedDate }
                                    minDate = { new Date() }
                                    dateFormat  = 'd MMM yyyy'
                                    locale = 'ru'
                                    onChange = { (date: Date) => setSelectedDate(date) }  />
                            </div>
                        </div>
                    </span>
                </div>
                <div className = 'description'>
                    <TaskInput
                        className = 'text'
                        label = 'Описание'
                        placeholder = 'После изучения всех технологий, завершить работу над проектами и найти работу.'
                        tag = 'textarea'
                        name = 'description'
                        error = { form.formState.errors.description }
                        register = { form.register('description') } />
                </div>
                <div className = 'tags'>{ tagsJSX }</div>
                <div className = 'errors'>
                    <p>{ form.formState.errors?.title && 'Минимальная длина поля title — 3' }</p>
                    <p>{ form.formState.errors?.description && 'Минимальная длина поля description — 3' }</p>
                </div>
                <div className = 'form-controls'>
                    <button
                        type = 'reset' className = 'button-reset-task'>Reset</button>
                    <button
                        onClick = { add }
                        type = 'submit' className = 'button-save-task'
                        disabled = { Object.keys(form.formState.errors).length > 0 }>Save</button>
                </div>
            </div>
        </form>
    );
};
