
import styles from "./Popper.module.scss"
// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => {
    return (
        <div className={styles.popperWrapper}>
            <div className={styles.popperContent}>
                {children}
            </div>
      </div>
    )

    
}
export default Wrapper