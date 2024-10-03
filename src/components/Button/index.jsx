import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Button = ({ to, onClick, type = 'button', disabled = false, className, children, ...passProps }) => {
    let Component = 'button';

    // Nếu có 'to', dùng 'Link' thay cho 'button'
    if (to) {
        Component = Link;
        passProps.to = to; // Truyền thuộc tính 'to' vào 'Link'
    }

    return (
        <Component
            className={`${styles.wrapper} ${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
            {...passProps}
        >
            {children}
        </Component>
    );
}

export default Button;
