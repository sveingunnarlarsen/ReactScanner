import React from 'react'
import './scan.scss'
import { Button, Col, Form } from 'react-bootstrap'

import covidLandingPhoto from '../../../images/covid-landing-portrait.png'

function Scan () {
  return (
    <>
      <Col className='scan-left-wrapper'>
        <div className='scan-header-wrapper'>
          <h1 className='scan-page-header'>
            COVID-19 Vaccine Product Quality Checker
          </h1>
          <h2 className='scan-page-subheader'>
            Thank you for using the Janssen COVID-19 Vaccine Product Quality
            Checker.
          </h2>
        </div>
        <Form inline className='lot-check-wrapper'>
          <Form.Label htmlFor='lot-number' srOnly>
            Lot Number
          </Form.Label>
          <Form.Control
            className='lot-check-input'
            id='lot-number'
            placeholder='Lot Check'
          />
          <Button type='submit' className='check-lot-button'>
            Check Lot
          </Button>
        </Form>
      </Col>
      <Col className='scan-right-wrapper'>
        <img
          className='covid-landing-photo'
          src={covidLandingPhoto}
          alt='covid landing'
        />
      </Col>
    </>
  )
}

export default Scan
