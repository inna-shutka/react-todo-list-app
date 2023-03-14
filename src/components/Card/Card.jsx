import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Card.module.css';
import { Button } from '../Button';
import { ColorDot } from '../ColorDot';
import { Checkbox } from '../Checkbox';

export const Card = ({
    text,
    title,
    tags,
    onDelete,
    onEdit,
    done,
    onDoneChange,
}) => {
    return (
        <div className={clsx(styles.card, { [styles.done]: done })}>
            <div className={styles.cardHeader}>
                <p className={styles.cardTitle}>{title}</p>
                <div className={styles.wrapperButton}>
                    <Button
                        onClick={onEdit}
                        className={styles.cardButton}
                        variant='icon'
                        icon='pencil'
                        size='medium'
                    />
                    <Button
                        className={styles.cardButton}
                        onClick={onDelete}
                        variant='icon'
                        icon='trash'
                        size='medium'
                    />
                </div>
            </div>
            <div className={styles.popoverWrapper}></div>
            <p className={styles.cardText}>{text}</p>
            <div className={styles.cardFooter}>
                <div className={styles.cardColorWrapper}>
                    {tags.map(({ color, id }) => (
                        <ColorDot className={styles.color} key={id} color={color} />
                    ))}
                </div>
                <Checkbox
                    className={styles.cardCheckbox}
                    checked={done}
                    onChange={onDoneChange}
                >
                    Done
                </Checkbox>
            </div>
        </div>
    );
};

Card.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDoneChange: PropTypes.func.isRequired,
    done: PropTypes.bool.isRequired,
    tags: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            color: PropTypes.string.isRequired,
        })
    ),
};

Card.defaultTypes = {
    tags: [],
};
