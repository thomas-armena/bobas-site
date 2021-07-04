import styles from '../styles/Home.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppStoreButton from '../components/AppStoreButton';
import Image from 'next/image';
import ipadImg from '../public/ipad.svg';
import iphoneImg from '../public/iphone.svg';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header/>
      <div className={styles.content}>
        <HeroSection/>
        <div className={styles.divider}/>
        <FeaturesSection/>
      </div>
      <Footer/>
    </div>
  )
}

function HeroSection() {
  return (
    <div className={styles.section}>
      <div className={styles.hero}>

        <div className={styles.description}>
          <h2 className='title'>Bobas</h2>
          <p className='tagline'>A Bubbly Arcade Shooter!</p>
          <p className='paragraph'>
            Shoot your way through endless hordes of troublesome bobas!
            <br/><br/>
            Download now for free!
          </p>
          <AppStoreButton/>
        </div>

        <div className={styles.showcase}>
          <div className={styles.ipad}>
            <Image  src={ipadImg}/>
          </div>
          <div className={styles.iphone}>
            <Image src={iphoneImg}/>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeaturesSection() {
  return (
    <div className={styles.section}>
      <div className={styles.features}>
        <h2 className='subtitle'>Features</h2>
        <ul className={styles.list}>
          <li>Fluid swipe controls to control shooting, gameplay designed for touch!</li>
          <li>Limitless combinations of player evolution, resulting in limitless replayability</li>
          <li>Risk and reward level up system where you must choose how Bobas evolve alongside you</li>

        </ul>
      </div>
    </div>
  )
}



