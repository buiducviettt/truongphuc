import styles from './Sidebar.module.scss'
import Images from '../../../../assets/image/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
function SideBar() {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.sidebarInner}>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faHome} />
                        <span>Dành cho bạn</span>
                    </li>
                    <li>
<<<<<<< HEAD
                          <FontAwesomeIcon icon={faHome} />
                        <span>Dành cho bạn</span>
=======
>>>>>>> 2b622611381b866b0ba5a092df2555f7a6f3c907
                        
                    </li>
                </ul>
            </div>
            
            
      </div>
        
     );
}

export default SideBar;