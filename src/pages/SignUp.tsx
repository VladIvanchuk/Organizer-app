// Components

import { SignUpForm } from '../components/forms/SignUpForm/SignUpForm';
import { Navigation } from '../components/Navigation';

export const SignUp: React.FC = () => {
    return (
        <>
            <Navigation />
            <main>
                <SignUpForm />
            </main>
        </>
    );
};
