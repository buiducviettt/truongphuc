import styles from './PopperMenu.module.scss'
function MenuItems(data) {
    return ( 
        <div className={styles.wrapper}>
        <button>{JSON.stringify(data)}</button></div>
    );
}

export default MenuItems;