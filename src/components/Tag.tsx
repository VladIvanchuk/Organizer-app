import classNames from 'classnames';
import { useTags } from '../hooks/useTags';
import { ITagModel } from '../types/TagModel';

export const Tag: React.FC<IPropTypes> = (props) => {
    const {
        bg, color, name, id,
    } = props;

    const {
        setSelectedTagId, selectedTagId,
    } = useTags();

    const handleClick = () => {
        setSelectedTagId(id);
    };

    return (
        <span
            onClick = { handleClick }
            className = { classNames('tag', { selected: selectedTagId === id }) }
            style = { {
                color,
                backgroundColor: bg,
            } }>{ name }</span>
    );
};
interface IPropTypes extends ITagModel {}
