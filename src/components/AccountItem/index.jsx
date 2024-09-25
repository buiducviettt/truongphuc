import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountItem.module.scss'

function AccountItem() {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.inner}>
            <div className={styles.avatar}>
                <FontAwesomeIcon icon={faUserPlus} className={styles.iconCerti} />
            </div>
            <div className={styles.accountInfo}>
            <div className={styles.accountName}>
                <h4>Account Name</h4>
                </div>
            <div className={styles.accountCerti}>
                   <FontAwesomeIcon icon={faCircleCheck} className={styles.iconCerti} />
                </div>
                </div>
            </div>
            </div>
     );
}

export default AccountItem;