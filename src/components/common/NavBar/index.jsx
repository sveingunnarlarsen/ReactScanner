import React from 'react'
import { Col, Navbar } from 'react-bootstrap'
import { ReactComponent as Flask } from '../../../icons/flask.svg'
import { ReactComponent as Keyboard } from '../../../icons/keyboard.svg'
import { ReactComponent as Phone } from '../../../icons/phone.svg'

import NavItem from './NavItem'

import './style.scss'

function NavBar () {
  return (
    <Navbar>
      <Col sm={1} />
      <NavItem to='/' name='Manual Search' Icon={Keyboard} />
      <NavItem to='/contact' name='Contact Us' Icon={Phone} />
      <NavItem to='/about' name='About Vaccine' Icon={Flask} />
      <Col sm={5} />
    </Navbar>
  )
}

export default NavBar
