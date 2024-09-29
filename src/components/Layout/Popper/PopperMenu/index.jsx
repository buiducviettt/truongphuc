import MenuItems from './MenuItems';
import styles from './PopperMenu.module.scss';
import Tippy from '@tippyjs/react/headless';
function PopperMenu({ children, menuList = [] }) {
    return (<Tippy
          interactive={true}
              placement='bottom-end'
       render={(attrs) => (
           <div className={styles.menuItems} tabIndex="-1" {...attrs}>
               <div className={styles.wrapper}>
                   {menuList.map((list, index) => {
                       return <MenuItems key={index} data={list} />                     
                   })}
               </div>          
        </div>
        )}>

            {children}
    </Tippy>)
}

export default PopperMenu;