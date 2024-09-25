import styles from './Sidebar.module.scss'
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
                          <FontAwesomeIcon icon={faHome} />
                        <span>Dành cho bạn</span>
                        
                    </li>
                </ul>
            </div>
            
            
      </div>
        
     );
}

export default SideBar;