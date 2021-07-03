import styles from '../styles/Footer.module.scss';

function Footer() {
    return (
        <div className={styles.footer}>
            <a href='/'> Home </a>
            <a href='/privacyPolicy'> Privacy Policy </a>
        </div>
    )
}

export default Footer;