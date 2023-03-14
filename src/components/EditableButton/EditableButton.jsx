import clsx from 'clsx';
import PropTypes from 'prop-types';
import { IconTypes } from '../Icon';
import { Button } from '../Button';
import { Input } from '../Input';
import styles from './EditableButton.module.css';
import { useEditable } from '../../hooks/useEditable';

export const EditableButton = ({ className, children, icon, onSave }) => {
    const {
        inputRef,
        isInputActive,
        handleSave,
        setIsInputActive,
        onChange,
        value,
    } = useEditable({
        onSave,
        cleanAfterSuccess: true,
    });

    return (
        <div className={clsx(className)}>
            {isInputActive ? (
                <Input
                ref={inputRef}
                onBlur={handleSave}
                value={value}
                onChange={onChange}
                onEnterPress={handleSave}
                size='small'
                />
            ) : (
                <Button
                onClick={() => setIsInputActive(true)}
                fluid
                icon={icon}
                variant='dashed'>
                    {children}
                </Button>
            )}
        </div>
    );
};

EditableButton.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string.isRequired,
    icon: PropTypes.oneOf(IconTypes),
    onSave: PropTypes.func.isRequired,
};
