import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { api } from '../api/api';
import { formatDate } from '../helpers/formatDate';
import { useTasks } from '../hooks/useTasks';
import { createTaskActions, taskActions } from '../lib/redux/actions';
import { ITasksModel } from '../types/todo';
import { Tag } from './Tag';


export const Tasks: React.FC<IPropTypes> = (props) => {
    const {
        tag, title, deadline, id, completed,
    } = props;
    const dispatch = useDispatch();

    const { setSelectedTask } = useTasks();

    const handleClick = async () => {
        await api.getTaskById(id).then((newTask) => {
            // @ts-ignore
            return setSelectedTask(newTask);
        });
        dispatch(createTaskActions.setCreateTaskOpen(false));
        dispatch(taskActions.setIsTaskOpen(true));
    };

    return (
        <div
            onClick = { handleClick }
            className = { classNames('task', { completed }) }>
            <span className = 'title'>{ title }</span>
            <div className = 'meta'>
                <span className = 'deadline'>{ formatDate(deadline) }</span>
                { <Tag { ...tag } /> }
            </div>
        </div>
    );
};
interface IPropTypes extends ITasksModel {}

