// Core
import { useSelector } from 'react-redux';
import classNames from 'classnames';
// Components
import { NewTaskCard } from '../components/forms/TaskCard/NewTaskCard';
import { Tasks } from '../components/Tasks';
import { getIsCreateTaskOpen, getIsTaskOpen } from '../lib/redux/selectors';
import { useTasks } from '../hooks/useTasks';
import { Navigation } from '../components/Navigation';
import { TaskCard } from '../components/forms/TaskCard/TaskCard';
import { ITasksModel } from '../types/todo';

export const TaskManager: React.FC = () => {
    const {
        allTasks, setCreateTaskOpen, setIsTaskOpen,
    } = useTasks();

    const isCreateTask = useSelector(getIsCreateTaskOpen);
    const IsTaskOpen = useSelector(getIsTaskOpen);

    const handleClick = () => {
        setCreateTaskOpen(true);
        setIsTaskOpen(false);
    };

    // @ts-ignore
    const taskJSX = allTasks?.map((task: ITasksModel) => (
        <Tasks key = { task.id } { ...task } />
    ));


    return (
        <>
            <Navigation />
            <main>
                <div className = 'controls'>
                    <i className = 'las'></i>
                    <button className = 'button-create-task' onClick = { handleClick } >Новая задача</button>
                </div>
                <div className = 'wrap'>
                    <div className = { classNames('list', { empty: allTasks?.length === 0 }) }>
                        <div className = 'tasks'>{ taskJSX  }</div>
                    </div>
                    { isCreateTask ? <div className = 'task-card'><NewTaskCard  /></div> : '' }
                    { IsTaskOpen ? <div className = 'task-card'><TaskCard /></div> : '' }

                </div>
            </main>
        </>

    );
};
