import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styles from './Popup.module.css';

export const Popup = ({ className, children }) => {
    useEffect(() => {
        document.documentElement.classList.add('open-popup');
        return () => {
            document.documentElement.classList.remove('open-popup');
        };
    }, []);
    return (
        <div className={styles.container}>
            <div className={clsx(styles.card, className)}>{children}</div>
        </div>
    );
};

Popup.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
