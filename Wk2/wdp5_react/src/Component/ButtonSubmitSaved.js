/* 
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Web Design Portfolio 5 (WDPV)
   • Week 2 – Development Phase 1
   */

import React from 'react'
import Download from '../images/download.svg'

// Functional Component
const Name = props => {
  return (
    <div style={styles.buttonsDiv}>
      <button style={styles.buttonSend}>Send</button>
      <button style={styles.buttonSave}>Save</button>
      <img src={Download} alt="Info" style={styles.download} />
    </div>
  )
}
export default Name

const styles = {

  buttonsDiv: {
  },
  buttonSend: {
    dispay: 'inline',
    marginRight: '.5em',
    background: 'rgb(237 237 237)',
    color: 'rgb(081 081 081)',
    width: '3.5em',
    borderRadius: '.3em'
  },
  buttonSave: {
    marginRight: '.5em',
    background: 'rgb(237 237 237)',
    color: 'rgb(081 081 081)',
    width: '3.5em',
    borderRadius: '.3em'
  },
  download: {
    paddingTop: ".2em",
    margin: '0',
    // color: 'rgb(081 081 081)',

  // position: 'absolute',
  // top: '50%'
  },
  downloadDiv: {
    // paddingTop: ".5em"
  }
} 