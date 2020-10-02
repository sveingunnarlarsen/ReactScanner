import React from 'react'
import PropTypes from 'prop-types'
import { LOT_STATUS } from '../../../lib/lotStatus'

import covidLanding from '../../../images/covid-landing-portrait.png'
import styles from './LotStatus.module.scss'

const STATUS_HEADER = {
  [LOT_STATUS.OK]: 'Ready To Use',
  [LOT_STATUS.EXPIRED]: 'Expired, Do Not Use',
  [LOT_STATUS.RECALLED]: 'Recalled, Do Not Use'
}

// TODO: image sources need to be replaced with respective icons
const STATUS_IMG = {
  [LOT_STATUS.OK]: covidLanding,
  [LOT_STATUS.EXPIRED]: covidLanding,
  [LOT_STATUS.RECALLED]: covidLanding
}

function LotStatus ({ lotStatus, dateString }) {
  const headerText = STATUS_HEADER[lotStatus]
  const imageSrc = STATUS_IMG[lotStatus]
  const lotExpiration = `LOT EXP: ${dateString}`

  return (
    <article className={styles.main}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={imageSrc} alt={headerText} />
      </div>
      <div className={styles.header}>
        <h1>{headerText}</h1>
        <h2>{lotExpiration}</h2>
      </div>
    </article>
  )
}

LotStatus.propTypes = {
  lotStatus: PropTypes.oneOf(Object.values(LOT_STATUS)).isRequired,
  dateString: PropTypes.string.isRequired
}

export default LotStatus
