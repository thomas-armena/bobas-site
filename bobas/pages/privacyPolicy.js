import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/PrivacyPolicy.module.scss';

function PrivacyPolicy() {
    return (
        <div>
            <Header/>
            <div className={styles.privacyPolicy}>
                <div className={styles.content}>
                    <h2 className='subtitle'>Privacy Policy</h2>
                    <p className={styles.paragraph}>Bobas does not use, save or access any personal information from your device.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PrivacyPolicy;