import styles from './Header.module.scss';
import Images from '../../../../assets/image/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,faMagnifyingGlass,faMessage } from '@fortawesome/free-solid-svg-icons'
import { Wrapper as PopperWrapper } from '../../Popper';
import AccountItem from '../../../AccountItem';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useState } from 'react';
function Header() {
  const [searchResult, setSearchResult] = useState([])
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3])
    },3000)    
  },[])
  
  return (
    <header className={styles.wrapper}>
      <div className={`${styles.hdInner}`}>
        <div className={styles.hdLogo}>
          <a href="#">
            <img src={Images.logo} alt="Logo"/>
          </a>
        </div>
        <Tippy
          interactive={true}
  visible={searchResult.length > 0}
  render={(attrs) => (
        <div className={styles.searchResult} tabIndex="-1" {...attrs}>
      <PopperWrapper>
        <div className={styles.accountWrapper}>
          <h4 className={styles.accountTitle}>Tài khoản</h4>
          <ul className={styles.accountList}>
        <li><AccountItem /></li>
        <li><AccountItem /></li>
        <li><AccountItem /></li>
        <li><AccountItem /></li>
            </ul>
          </div>
      </PopperWrapper>
        </div>
   
    )}>
                <div className={styles.hdSearchWrapper}>
                <div className={`input-group ${styles.hdSearch}`}>
              <input type="text" className={`form-control ${styles.inputSearchHd}`} placeholder="Tìm kiếm"></input>
              <div className={styles.deleteIcon}>
                <FontAwesomeIcon className={styles.deleteIconFont} icon={faXmark} />
              </div>
              <div className={styles.LineSplitSearch} >
              </div>
             <Tippy content="Tìm kiếm">
                <button className={styles.searchButtonWrap} >
                  <FontAwesomeIcon  className={styles.searchButton} icon={faMagnifyingGlass} />
                     </button>
                </Tippy>
                
            </div>         
          </div>
          </Tippy>
          
        <div className="hdRight">
          <div className={ `${styles.hdRightInner} d-flex`}>
            <button className= {` ${styles.uploadButton}`}> <span>+</span>Tải lên </button>
            <div className="messageButtonWrap">
              {/* icon */}
              <FontAwesomeIcon className='messageIcon' icon={faMessage} />
              {/* noti */}
            </div>
            <div className="hdProfileWrap">    
               <div className={styles.avatar}>
               <img src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/e0631658a4c2863bc8f62dc95718713f.jpeg?lk3s=a5d48078&nonce=89852&refresh_token=927bea9797a8ffc57658780748d9601d&x-expires=1727492400&x-signature=UEaAWgQSKc7evnKSj286Z4trRgY%3D&shp=a5d48078&shcp=81f88b70" alt="" />
            </div> 
            </div>
          </div>
        </div>
        
              </div>
    
    </header>
  );
}

export default Header;
