import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountItem.module.scss'

function AccountItem() {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.inner}>
            <div className={styles.avatar}>
               <img src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/e0631658a4c2863bc8f62dc95718713f.jpeg?lk3s=a5d48078&nonce=89852&refresh_token=927bea9797a8ffc57658780748d9601d&x-expires=1727492400&x-signature=UEaAWgQSKc7evnKSj286Z4trRgY%3D&shp=a5d48078&shcp=81f88b70" alt="" />
            </div>
            <div className={styles.accountInfo}>
                    <div className={`${ styles.accountName } d-flex flex-row`}>
                        <h4>Account Name</h4>
                        <div className={styles.accountCerti}>
                   <FontAwesomeIcon icon={faCircleCheck} className={styles.iconCerti} />
                </div>
                    </div>
                    <span className={styles.subAvatarName}>Account name</span>
            
                </div>
            </div>
            </div>
     );
}

export default AccountItem;