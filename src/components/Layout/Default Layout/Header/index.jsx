import styles from './Header.module.scss';
import Images from '../../../../assets/image/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,faMagnifyingGlass,faMessage,faUser } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={`${styles.hdInner}`}>
        <div className={styles.hdLogo}>
          <a href="#">
            <img src={Images.logo} alt="Logo"/>
          </a>
              </div>
              <div className={styles.hdSearchWrapper}>
              <div className={`input-group ${styles.hdSearch}`}>
            <input type="text" className={`form-control ${styles.inputSearchHd}`} placeholder="Tìm kiếm"></input>
            <div className={styles.deleteIcon}>
              <FontAwesomeIcon className={styles.deleteIconFont} icon={faXmark} />
            </div>
            <div className={styles.LineSplitSearch} >
            </div>
            <button className={styles.searchButtonWrap} >
              <FontAwesomeIcon  className={styles.searchButton} icon={faMagnifyingGlass} />
                 </button>
          </div>         
        </div>
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
