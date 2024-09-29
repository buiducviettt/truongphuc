import styles from './Button.module.scss'
// eslint-disable-next-line react/prop-types
const Button = ({ onClick, type = 'button', disabled = 'false',className, children,...passProps }) => {
    return (
        <button 
            className={`${ styles.wrapper } ${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
            {...passProps}
        >{children}</button>
    )
}
export default Button