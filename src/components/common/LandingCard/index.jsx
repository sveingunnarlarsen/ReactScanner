import React from 'react'
import PropTypes from 'prop-types'

import styles from './LandingCard.module.scss'

function LandingCard ({ highlighted, text, icon }) {
  return (
    <article className={`${styles.card} ${highlighted ? styles.highlightCard : ''}`} >
      <section className={styles.content}>
        <div className={styles.iconWrapper}>
          <img className={styles.icon} src={icon} alt={text} />
        </div>
        <p className={`${styles.text} ${highlighted ? styles.highlightText : ''}`}>{text}</p>
      </section>
    </article>
  )
}

LandingCard.propTypes = {
  highlighted: PropTypes.bool,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

LandingCard.defaultProps = {
  highlighted: false
}

export default LandingCard
