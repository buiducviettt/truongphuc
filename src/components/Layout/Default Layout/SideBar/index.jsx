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
                        <span>Khám phá</span>
                        
                    </li>
                    <li>
                          <FontAwesomeIcon icon={faHome} />
                        <span>Đang follow</span>
                        
                    </li>
                    <li>
                          <FontAwesomeIcon icon={faHome} />
                        <span>Bạn bè</span>
                        
                    </li>
                    <li>
                          <FontAwesomeIcon icon={faHome} />
                        <span>LIVE</span>
                        
                    </li>
                    <li>
                          <FontAwesomeIcon icon={faHome} />
                        <span>Tin nhắn</span>  
                    </li>
                     <li>
                         <div className={styles.avatar}>
               <img src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/e0631658a4c2863bc8f62dc95718713f.jpeg?lk3s=a5d48078&nonce=89852&refresh_token=927bea9797a8ffc57658780748d9601d&x-expires=1727492400&x-signature=UEaAWgQSKc7evnKSj286Z4trRgY%3D&shp=a5d48078&shcp=81f88b70" alt="" />
            </div>
                        <span>Hồ sơ</span>  
                    </li>
                </ul>
            </div>  
      </div>
        
     );
}
export default SideBar;