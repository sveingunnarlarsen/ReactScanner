import React from 'react'

import './style.scss'
import janssenLogo from '../../../images/janssen-logo.png'

function Footer () {
  const footerTextOne = 'Janssen Scientific Affairs, LLC 2012. All rights reserved. This site is published by Janssen Scientific Affairs, LLC, which is solely responsible for its content.'
  const footerTextTwo = 'All third party trademarks used herein are trademarks of their respective owners.'
  const footerTextThree = 'This information is intended for healthcare providers in the United States only.'
  const footerTextFour = 'This page was last modified on September 03, 2020.'

  return (
    <footer className='app-footer'>
      <div className='app-footer-left'>
        <h1 className='app-footer-text'>{footerTextOne}</h1>
        <h2 className='app-footer-text'>{footerTextTwo}</h2>
        <h3 className='app-footer-text'>{footerTextThree}</h3>
        <h4 className='app-footer-text'>{footerTextFour}</h4>
      </div>
      <div className='app-footer-right'>
        <img
          className='janssen-footer-logo'
          src={janssenLogo}
          alt='janssen footer logo'
        />
      </div>
    </footer>
  )
}

export default Footer
