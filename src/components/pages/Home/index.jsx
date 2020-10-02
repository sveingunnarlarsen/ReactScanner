import React from 'react'

import { Link } from 'react-router-dom'
import LandingCard from '../../common/LandingCard'

import covidLandingPortrait from '../../../images/covid-landing-portrait.png'
import styles from './home.module.scss'

import scanIcon from '../../../icons/scan-code-white.svg'
import searchIcon from '../../../icons/keyboard.svg'
import contactIcon from '../../../icons/phone.svg'
import aboutIcon from '../../../icons/flask.svg'

import documentIcon from '../../../icons/document.svg'

function Home () {
  const chooseOne = 'Choose One'
  const thankYou = 'Thank you for using the Janssen COVID-19 Vaccine Product Quality Checker.'

  const scanText = 'Scan Code'
  const searchText = 'Manual Lot Search'
  const contactText = 'Contact Us'
  const aboutText = 'About Vaccine'

  const reportText = 'Report an AE / PCQ'

  return (
    <main className={styles.main}>
      <img src={covidLandingPortrait} className={styles.portrait} alt={thankYou} />
      <section className={styles.content}>
        <section className={styles.header}>
          <h2 className={styles.chooseOne}>{chooseOne}</h2>
          <p>{thankYou}</p>
        </section>
        <section className={styles.cardGrid}>
          <div className={styles.cardRow}>
            <Link to='/'>
              <LandingCard icon={scanIcon} text={scanText} highlighted />
            </Link>
            <Link to='/search'>
              <LandingCard icon={searchIcon} text={searchText} />
            </Link>
          </div>
          <div className={styles.cardRow}>
            <Link to='/contact'>
              <LandingCard icon={contactIcon} text={contactText} />
            </Link>
            <Link to='/about'>
              <LandingCard icon={aboutIcon} text={aboutText} />
            </Link>
          </div>
        </section>
      </section>
      <section className={styles.report}>
        <Link to='/'>
          <h3 className={styles.reportText}>{reportText}</h3>
        </Link>
        <div className={styles.reportIconWrapper}>
          <img className={styles.reportIcon} src={documentIcon} alt={reportText} />
        </div>
      </section>
    </main>
  )
}

export default Home
