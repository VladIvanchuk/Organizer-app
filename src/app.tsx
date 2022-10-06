// Core
import { FC } from 'react';
import {
    Navigate, Outlet, Route, Routes,
} from 'react-router-dom';

// Components
import {
    SignUp, Login, TaskManager, Profile,
} from './pages';

// Instruments


export const App: FC = () => {
    const token = localStorage.getItem('token');

    return (
        <>
            <Routes>
                <Route path = '/todo' element = { <Outlet /> }>
                    <Route path = '/login' element = { <Login /> } />
                    <Route path = '/signup' element = { <SignUp /> } />
                    <Route path = '/task-manager' element = { <TaskManager /> } />
                    <Route path = '/profile' element = { <Profile /> } />
                </Route>

                <Route
                    path = '*'
                    element = { <Navigate to = { !token ? '/todo/login' : '/todo/task-manager' } replace /> } />
            </Routes>
        </>
    );
};

