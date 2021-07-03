import styles from '../styles/Header.module.scss';
import AppStoreButton from './AppStoreButton';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <div className={styles.title}>
                    Bobas
                </div>
                <AppStoreButton/>
            </div>
        </div>
    );
}

export default Header;