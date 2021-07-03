import styles from '../styles/AppStoreButton.module.scss';

const APP_URL = 'https://apps.apple.com/us/app/bobas/id1554763602'

function AppStoreButton() {
    return (
        <a className={styles.button} href={APP_URL} target="_blank">
            <img src='/downloadbadge.svg'></img>
        </a>
    )
}

export default AppStoreButton;