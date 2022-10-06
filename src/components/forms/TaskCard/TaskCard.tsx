// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { useEffect, useState } from 'react';
import { parseISO } from 'date-fns';
import { schema } from './config';

// Components
import { TaskInput } from '../../elements/taskInput';
import { useTags } from '../../../hooks/useTags';
import { Tag } from '../../Tag';
import { useTasks } from '../../../hooks/useTasks';
import { api } from '../../../api/api';
import { ITasksModel } from '../../../types/todo';


export const TaskCard: React.FC = () => {
    const { setSelectedTagId } = useTags();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { data, selectedTagId } = useTags();
    const {
        selectedTask, updateTask, removeTask, setIsTaskOpen,
    } = useTasks();
    const {
        // @ts-ignore
        title, description, tag, id, deadline,
    } = selectedTask;


    registerLocale('ru', ru);

    const tagsJSX = data.map((tags) => (
        <Tag key = { tags.id } { ...tags } />
    ));

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });
    useEffect(() => {
        form.reset();
    }, [selectedTask]);

    const remove = async () => {
        await api.deleteTaskById(id)
            .then((newTask) => {
            // @ts-ignore
                return removeTask(newTask);
            });
        setIsTaskOpen(false);
    };
    const add =  () => {
        form.register('deadline', { value: selectedDate });
        form.register('tag', { value: selectedTagId });
        setSelectedTagId(tag?.id);
    };
    const complete = async () => {
        form.register('description', { value: description });
        form.register('title', { value: title });
        form.register('completed', { value: true });
        // @ts-ignore
        await api.updateTaskById(form.getValues(), id)
            .then((newTask) => {
            // @ts-ignore
                return updateTask(newTask.data);
            });
    };
    const publish = form.handleSubmit(async (newTodo: ITasksModel) => {
        await api.updateTaskById(newTodo, id)
            .then((newTask) => {
            // @ts-ignore
                return updateTask(newTask.data);
            });
        setIsTaskOpen(false);
    });


    return (
        <form onSubmit = { publish }>
            <div className = 'head'>
                <div onClick = { complete } className = 'button-complete-task'>завершить</div>
                <div onClick = { remove } className = 'button-remove-task'></div>
            </div>
            <div className = 'content'>

                <TaskInput
                    className = 'title'
                    label = 'Задачи'
                    placeholder = 'Пройти интенсив по React + Redux + TS + Mobx'
                    defaultValue = { title }
                    error = { form.formState.errors.title }
                    register = { form.register('title') } />

                <div className = 'deadline'>
                    <span className = 'label'>Дедлайн</span>
                    <span className = 'date'>
                        <div className = 'react-datepicker-wrapper'>
                            <div className = 'react-datepicker__input-container'>

                                <ReactDatePicker
                                    selected = { parseISO(deadline) }
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
                        defaultValue = { description }
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
