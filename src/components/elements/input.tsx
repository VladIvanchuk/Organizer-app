import { UseFormRegisterReturn } from 'react-hook-form';

export const Input: React.FC<IPropTypes> = (props) => {
    const input = (
        <input
            className = { props.className }
            placeholder = { props.placeholder }
            type = { props.type }
            { ...props.register } />
    );

    return (
        <label className = 'label'>
            { props.label }{ ' ' }
            <span className = 'error-message'>{ props.error?.message }</span>
            { input }
        </label>
    );
};

Input.defaultProps = {
    type: 'text',
    tag:  'input',
};

interface IPropTypes {
    placeholder?: string;
    type?: string;
    tag?: string;
    name?: string;
    label?: string;
    className?: string;
    register?: UseFormRegisterReturn;
    error?: {
        message?: string;
    };
    options?: { value: string; name: string }[];
}

