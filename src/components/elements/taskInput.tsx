import { UseFormRegisterReturn } from 'react-hook-form';

export const TaskInput: React.FC<IPropTypes> = (props) => {
    let input = (
        <input
            defaultValue = { props.defaultValue }
            className = { props.className }
            placeholder = { props.placeholder }
            type = { props.type }
            { ...props.register } />
    );

    if (props.tag === 'textarea') {
        input = (
            <textarea
                defaultValue = { props.defaultValue }
                className = { props.className }
                placeholder = { props.placeholder }
                { ...props.register }>
            </textarea>
        );
    }

    return (
        <label className = 'label'>
            { props.label }{ ' ' }
            { input }
        </label>
    );
};

TaskInput.defaultProps = {
    type: 'text',
    tag:  'input',
};

interface IPropTypes {
    placeholder?: string;
    type?: string;
    tag?: string;
    name?: string;
    label?: string;
    value?: string;
    className?: string;
    register?: UseFormRegisterReturn;
    defaultValue?: string;
    error?: {
        message?: string;
    };
    options?: { value: string; name: string }[];
}

