/* eslint-disable react/prop-types */
import styles from './PopperMenu.module.scss'
import Button from '../../../Button';
function MenuItems({ data }) {
    console.log(data)
    return ( 
        <div className={styles.wrapper}>
            <Button className={styles.menuItem} to={data.to} >
                <div className={styles.menuContent}>
                <div className={styles.iconMenu}>
                             {data.icon}
                </div>
                <div className={styles.titleMenu}>
                    {data.title}
                    </div>
                    </div>
                </Button>
      </div>
    );
}

export default MenuItems;