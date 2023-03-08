import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './PopupDelete.module.css';
import { useState } from 'react';
import { Popup } from '../Popup/Popup';
import { Button } from '../Button/Button';

export const PopupDelete = ({ title, onDeleted }) => {
    const [isVisiblePopup, setIsVisiblePopup] = useState(true);
    const onClose = () => setIsVisiblePopup(!isVisiblePopup);
    return (
        isVisiblePopup && (
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
                        onClick={onDeleted}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            </Popup>
        )
    );
};

PopupDelete.propTypes = {
    title: PropTypes.string,
    onDeleted: PropTypes.func.isRequired,
};
