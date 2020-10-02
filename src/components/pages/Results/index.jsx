import React from 'react'
import './results.scss'

const Results = () => {
  const lotExpiration = 'LOT EXP: *INSERT DATE*'
  const scanInstruction = 'If you are scanning at the point of arrival, please ensure you also scan prior to administration of the vaccine, in the event that any information has changed.'
  const moreInstructionsAndDosingInfo = 'For more information regarding important safety instructions and other dosing information, click here'
  const scanResults = 'Scan Results *INSERT DATE*'
  const gtin = 'GTIN: *INSERT GTIN*'
  const multivialNote = 'Note: Use Multi-dose vials within 4 hrs of opening'
  const lotNum = 'LOT #: *INSERT LOT NUMBER*'

  return (
    <div className='ok-landing'>
      <div className='ok-landing-top'>
        PLACE OK ICON HERE
        {/* <img className='covid-landing-photo' src={covidLandingPhoto} alt='covid landing' /> */}
        <h1 className='ready-header'>Ready to Use</h1>
        <h2 className='lot-exp-wrapper'>{lotExpiration}</h2>
      </div>
      <div className='ok-landing-bottom'>
        <h1 className='scan-instructions-one'>{scanInstruction}</h1>
        <h2 className='scan-instructions-two'>{moreInstructionsAndDosingInfo}</h2>
        <div className='scan-results-wrapper'>
          <h1 className='scan-results-header'>{scanResults}</h1>
          <h2 className='scan-gtin'>{gtin}</h2>
          <h4 className='scan-results-multivial-note'>{multivialNote}</h4>
          <h3 className='scan-lot-number'>{lotNum}</h3>
        </div>
      </div>
    </div>
  )
}

export default Results
