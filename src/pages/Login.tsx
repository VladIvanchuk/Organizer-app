// Components

import { LoginForm } from '../components/forms/LoginForm/LoginForm';
import { Navigation } from '../components/Navigation';


export const Login: React.FC = () => {
    return (
        <>
            <Navigation />
            <main>
                <LoginForm />
            </main>
        </>
    );
};
