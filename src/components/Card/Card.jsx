import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Card.module.css';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { ColorDot } from '../ColorDot/ColorDot';
import { Checkbox } from '../Checkbox/Checkbox';
import { PopupDelete } from '../Popup/variants/PopupDelete/PopupDelete';
import { Popover } from '../Popover/Popover';

export const Card = ({ text, title }) => {
    const [check, setCheck] = useState(false);
    const [isCardVisible, setIsCardVisible] = useState(true);
    const onClose = () => setIsCardVisible(!isCardVisible);
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);
    const togglePopover = () => setIsPopoverVisible(!isPopoverVisible);

    return (
        isCardVisible && (
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <p className={styles.cardTitle}>{title}</p>
                    <Button
                    onClick={togglePopover}
                    variant='icon'
                    icon='IconMore'
                    size='medium'
                    />
                </div>
                <div className={styles.popoverWrapper}>
                    {isPopoverVisible && <Popover onClick={togglePopover} />}
                </div>
                <p className={check ? styles.cardTextCheck : styles.cardText}>{text}</p>
                <div className={styles.cardFooter}>
                    <div className={styles.cardColorWrapper}>
                        <ColorDot className={styles.cardColor} variant='purple' />
                        <ColorDot className={styles.cardColor} variant='blue' />
                        <ColorDot className={styles.cardColor} variant='orange' />
                        <ColorDot className={styles.cardColor} variant='green' />
                    </div>
                    <Checkbox
                    className={styles.cardCheckbox}
                    checked={check}
                    onChange={setCheck}
                    >
                        Done
                    </Checkbox>
                </div>
                {check && <PopupDelete onClick={onClose} />}
            </div>
        )
    );
};

Card.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
