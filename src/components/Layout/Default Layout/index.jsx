import Header from "./Header";
import SideBar from "./SideBar";
import styles from './DefaultLayout.module.scss'
// eslint-disable-next-line react/prop-types
function DefaultLayout({children}) {
    return (
      <div className={styles.wrapper}>
            <header className={styles.header}>
                <Header />
            </header>
            <aside className={styles.sidebar}>
                <SideBar />
            </aside>
            <main className={styles.content}>
                {children}
            </main>
        </div>
        
    )

}

export default DefaultLayout;