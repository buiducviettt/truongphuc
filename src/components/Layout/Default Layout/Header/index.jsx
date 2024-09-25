import styles from './Header.module.scss';
import Images from '../../../../assets/image/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,faMagnifyingGlass,faMessage,faUser } from '@fortawesome/free-solid-svg-icons'
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
          <h3>Tài khoản</h3>
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
              <div className="profileIcon">
                <FontAwesomeIcon className='userIcon' icon={faUser} />

              </div>

            </div>
          </div>
        </div>
        
              </div>
    
    </header>
  );
}

export default Header;
