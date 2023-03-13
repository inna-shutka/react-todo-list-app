import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './PopupDelete.module.css';
import { useState } from 'react';
import { Popup } from '../Popup/Popup';
import { Button } from '../Button/Button';

export const PopupDelete = ({ title, onDelete, onClose }) => {
    return (
        <Popup>
            <div className={styles.container}>
                <Button
                onClick={onClose}
                className={styles.popupClose}
                variant='icon'
                icon='close'
                size='small'
                />
                <p className={styles.popupTitle}>{title}</p>
                <div className={styles.popupButtons}>
                    <Button
                    variant='text'
                    onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button
                    variant='danger'
                    onClick={onDelete}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </Popup>
    )
};

PopupDelete.propTypes = {
    title: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};
