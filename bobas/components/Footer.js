import styles from '../styles/Footer.module.scss';
import Link from 'next/link'

function Footer() {
    return (
        <div className={styles.footer}>
            <Link href='/'> Home </Link>
            <Link href='/privacyPolicy'> Privacy Policy </Link>
        </div>
    )
}

export default Footer;