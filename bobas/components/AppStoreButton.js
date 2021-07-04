import styles from '../styles/AppStoreButton.module.scss';
import Image from 'next/image';
import Link from 'next/Link';
import downloadBadge from '../public/downloadbadge.svg';

const APP_URL = 'https://apps.apple.com/us/app/bobas/id1554763602'

function AppStoreButton() {
    return (
        <div className={styles.button}>
        <Link  href={APP_URL} target="_blank" rel="noreferrer">
            <Image src={downloadBadge}></Image>
        </Link>
        </div>

    )
}

export default AppStoreButton;