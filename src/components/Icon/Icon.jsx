import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Icon.module.css';


export const IconTypes = [
    'IconMore',
    'IconAdd',
    'IconEdit',
    'IconDelete',
    'IconClose',
    'IconArrowDown',
    'IconArrowUp',
    'IconCheckbox',
];

export const Icon = ({ className, size, fill, name }) => {
    switch (name) {
        default:
            return null;
        case 'IconMore':
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill={fill}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                        fill={fill}
                    />
                </svg>
            );
        case "IconAdd":
            return (
                <svg
                    className={clsx(styles.iconAdd, className)}
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill={fill}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z"
                        fill={fill}
                    />
                </svg>
            );
        case "IconEdit":
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill={fill}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6V19ZM19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3043 2.75 17.863 2.75C18.421 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.571 21.275 6.113C21.2917 6.65433 21.1083 7.11667 20.725 7.5L19.3 8.925ZM4 21C3.71667 21 3.47933 20.904 3.288 20.712C3.096 20.5207 3 20.2833 3 20V17.175C3 17.0417 3.025 16.9127 3.075 16.788C3.125 16.6627 3.2 16.55 3.3 16.45L13.6 6.15L17.85 10.4L7.55 20.7C7.45 20.8 7.33767 20.875 7.213 20.925C7.08767 20.975 6.95833 21 6.825 21H4ZM14.325 9.675L13.625 8.975L15.025 10.375L14.325 9.675Z"
                        fill={fill}
                    />
                </svg>
                );
        case "IconDelete":
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill={fill}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 21C6.45 21 5.97933 20.8043 5.588 20.413C5.196 20.021 5 19.55 5 19V6C4.71667 6 4.479 5.90433 4.287 5.713C4.09567 5.521 4 5.28333 4 5C4 4.71667 4.09567 4.479 4.287 4.287C4.479 4.09567 4.71667 4 5 4H9C9 3.71667 9.096 3.479 9.288 3.287C9.47933 3.09567 9.71667 3 10 3H14C14.2833 3 14.521 3.09567 14.713 3.287C14.9043 3.479 15 3.71667 15 4H19C19.2833 4 19.5207 4.09567 19.712 4.287C19.904 4.479 20 4.71667 20 5C20 5.28333 19.904 5.521 19.712 5.713C19.5207 5.90433 19.2833 6 19 6V19C19 19.55 18.8043 20.021 18.413 20.413C18.021 20.8043 17.55 21 17 21H7ZM7 6V19H17V6H7ZM9 16C9 16.2833 9.096 16.5207 9.288 16.712C9.47933 16.904 9.71667 17 10 17C10.2833 17 10.521 16.904 10.713 16.712C10.9043 16.5207 11 16.2833 11 16V9C11 8.71667 10.9043 8.479 10.713 8.287C10.521 8.09567 10.2833 8 10 8C9.71667 8 9.47933 8.09567 9.288 8.287C9.096 8.479 9 8.71667 9 9V16ZM13 16C13 16.2833 13.096 16.5207 13.288 16.712C13.4793 16.904 13.7167 17 14 17C14.2833 17 14.521 16.904 14.713 16.712C14.9043 16.5207 15 16.2833 15 16V9C15 8.71667 14.9043 8.479 14.713 8.287C14.521 8.09567 14.2833 8 14 8C13.7167 8 13.4793 8.09567 13.288 8.287C13.096 8.479 13 8.71667 13 9V16Z"
                        fill={fill}
                    />
                </svg>
            );
        case "IconClose":
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill={fill}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z"
                        fill={fill}
                    />
                </svg>
            );
        case "IconArrowDown":
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill={fill}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.70538 8.70455C7.09466 8.31528 7.72569 8.31494 8.11538 8.70379L12 12.5799L15.8846 8.70378C16.2743 8.31494 16.9053 8.31528 17.2946 8.70455C17.6842 9.09413 17.6842 9.72575 17.2946 10.1153L12.7071 14.7028C12.3166 15.0934 11.6834 15.0934 11.2929 14.7028L6.70538 10.1153C6.31581 9.72575 6.31581 9.09413 6.70538 8.70455Z"
                        fill={fill}
                    />
                </svg>
            );
        case "IconArrowUp":
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill={fill}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.70538 14.7055C7.09466 15.0948 7.72569 15.0951 8.11538 14.7062L12 10.8301L15.8846 14.7062C16.2743 15.0951 16.9053 15.0948 17.2946 14.7055C17.6842 14.3159 17.6842 13.6843 17.2946 13.2947L12.7071 8.7072C12.3166 8.31668 11.6834 8.31668 11.2929 8.7072L6.70538 13.2947C6.31581 13.6843 6.31581 14.3159 6.70538 14.7055Z"
                        fill={fill}
                    />
                </svg>
            );
        case "IconCheckbox":
            return (
                <svg
                    className={clsx(className)}
                    width={size}
                    height={size}
                    viewBox="0 0 15 14"
                    fill={fill}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5791 3.08751C12.807 3.31532 12.807 3.68466 12.5791 3.91247L6.16248 10.3291C5.93467 10.5569 5.56533 10.5569 5.33752 10.3291L2.42085 7.41247C2.19305 7.18466 2.19305 6.81532 2.42085 6.58751C2.64866 6.3597 3.01801 6.3597 3.24581 6.58751L5.75 9.0917L11.7542 3.08751C11.982 2.85971 12.3513 2.85971 12.5791 3.08751Z"
                        fill={fill}
                    />
                </svg>
            );
    }
};

Icon.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fill: PropTypes.string,
    name: PropTypes.oneOf(IconTypes).isRequired,
};