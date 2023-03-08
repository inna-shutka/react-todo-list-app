import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './ColorDot.module.css';

export const ColorDot = ({ className, color }) => {
    return (
        <div 
            className={clsx(className, styles.container)}
            style={{ backgroundColor: color }}
            >
        </div>
    );
};

ColorDot.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string.isRequired,
};
