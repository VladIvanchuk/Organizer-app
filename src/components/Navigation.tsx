// Core
import { NavLink } from 'react-router-dom';
import { api } from '../api/api';

export const Navigation: React.FC = () => {
    const token = localStorage.getItem('token');

    const handleClick = () => {
        void api.logout();
        localStorage.setItem('token', '');
    };

    return (
        <nav>
            { !token ? <NavLink
                to = '/todo/login'>Войти</NavLink> : '' }
            <NavLink
                aria-disabled = { !token ? 'true' : 'false' }
                to = '/todo/task-manager'>К задачам</NavLink>
            <NavLink
                aria-disabled = { !token ? 'true' : 'false' }
                to = '/todo/profile'>Профиль</NavLink>
            { token ? <a
                onClick = { handleClick } href = '/todo/login'
                className = 'button-logout'>Выйти</a> : '' }

        </nav>
    );
};

