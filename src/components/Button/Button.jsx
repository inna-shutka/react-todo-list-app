import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
import { Icon, IconTypes } from '../Icon';

export const Button = ({
    className,
    onClick,
    children,
    disabled,
    variant,
    icon,
    size,
    fluid,
}) => {
    return (
        <button
        type={onClick ? 'button' : 'submit'}
        onClick={onClick}
        className={clsx(
            className,
            styles.button,
            styles[`variant-${variant}`],
            styles[`button-${size}`],
            { [styles.fluid]: fluid }
        )}
        disabled={disabled}
        >
        {!!icon && (
            <Icon
            name={icon}
            className={clsx(styles.icon, {
                [styles.hasIcon]: icon && variant !== 'icon',
            })}
            />
        )}
        {variant !== 'icon' && <span>{children}</span>}
        </button>
    );
};

Button.propType = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['primary', 'text', 'icon', 'danger', 'dashed']),
    icon: PropTypes.oneOf(IconTypes),
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    fluid: PropTypes.bool,
};

Button.defaultProps = {
    variant: 'primary',
};
