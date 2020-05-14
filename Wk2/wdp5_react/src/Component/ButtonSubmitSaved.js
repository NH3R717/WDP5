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
    <div style={styles.button}>
      <button style={styles.buttonSend}>Send</button>
      <button style={styles.buttonSave}>Save</button>
      {/* <button style={styles.button}>Down</button> */}
      <img src={Download} alt="Info" style={styles.download} />
    </div>
  )
}
export default Name

const styles = {

  buttonDiv: {
    
  },
  buttonSend: {
    marginRight: '.5em'
  },
  buttonSave: {
    marginRight: '.5em'
  },
  download: {
    
  }
} 