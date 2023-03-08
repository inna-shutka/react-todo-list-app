import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Tag.module.css';
import { useEffect } from 'react';
import { ColorDot } from '../ColorDot';
import { useEditable } from '../../hooks/useEditable';
import { Button } from '../Button/';
import { Input } from '../Input';

export const Tag = ({
    children,
    onClick,
    onSave,
    color,
    active,
    onDelete,
    isEditable,
}) => {
    const { inputRef, isInputActive, onBlur, onChange, value, setIsInputActive } =
        useEditable({
            onSave,
        });

    const renderEditableContent = () => {
        if (isEditable && isInputActive) {
            return (
                <Input
                    className={styles.input}
                    ref={inputRef}
                    onBlur={onBlur}
                    value={value}
                    onChange={onChange}
                ></Input>
            );
        }
        if (isEditable && !isInputActive) {
            return (
                <div className={styles.actions}>
                    <Button
                        className={styles.actionBtn}
                        variant='icon'
                        icon='pencil'
                        onClick={() => setIsInputActive(true)}
                    />
                    <Button
                        className={styles.actionBtn}
                        variant='icon'
                        icon='trash'
                        onClick={onDelete}
                    />
                </div>
            );
        }
        return null;
    };

    useEffect(() => {
        onChange(children);
    }, [children]);

    return (
        <div className={clsx(styles.container, { [styles.active]: active })}>
            <div className={styles.inner}>
                <ColorDot className={styles.color} color={color}></ColorDot>
                <button aria-label className={styles.button} onClick={onClick}></button>
                <span className={styles.text}>{children}</span>
            </div>
            {renderEditableContent()}
        </div>
    );
};

Tag.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
    color: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func,
    isEditable: PropTypes.bool,
};
