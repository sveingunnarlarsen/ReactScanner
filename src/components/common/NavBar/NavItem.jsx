import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Col, Navbar } from 'react-bootstrap'

function NavItem ({ to, name, Icon }) {
  return (
    <Col className='menu-item'>
      <NavLink to={to}>
        <Icon />
        <Navbar.Text>{name}</Navbar.Text>
      </NavLink>
    </Col>
  )
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired
}

export default NavItem
