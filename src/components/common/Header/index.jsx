import React from 'react'
import './styles.scss'
import janssenLogo from '../../../images/janssen-logo.png'

function Header () {
  return (
    <header className='App-header'>
      <img
        className='janssen-header-logo'
        src={janssenLogo}
        alt='janssen header logo'
      />
    </header>
  )
}

export default Header
