import styles from '../styles/Home.module.scss';
import Header from '../components/Header';
import AppStoreButton from '../components/AppStoreButton';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header/>
      <div className={styles.content}>
        <HeroSection/>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <div className={styles.section}>
      <div className={styles.hero}>

        <div className={styles.description}>
          <h2 className={styles.title}>Bobas</h2>
          <p className={styles.tagline}>A Bubbly Arcade Shooter!</p>
          <p className={styles.paragraph}>
            Shoot your way through endless hordes of troublesome bobas!
            <br/><br/>
            Download now for free!
          </p>
          <AppStoreButton/>
        </div>

        <div className={styles.showcase}>
          <img className={styles.ipad} src="/ipad.svg" />
          <img className={styles.iphone} src="/iphone.svg"/>
        </div>
      </div>
    </div>
  )
}



