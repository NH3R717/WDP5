/* 
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Web Design Portfolio 5 (WDPV)
   • Week 2 – Development Phase 1
   */

import React from 'react'
import Ellipsis from '../images/download.svg'

// Functional Component
const Name = props => {
  return (
    <div style={styles.button}>
      <button style={styles.button}>Send</button>
      <button style={styles.button}>Save</button>
      {/* <button style={styles.button}>Down</button> */}
      <img src={Ellipsis} alt="Info" style={styles.Ellipsis} />
    </div>
  )
}
export default Name

const styles = {

  buttonDiv: {
  },
  button: {
  },
  download: {
    display: 'flex',
    margin: '1em 0 0 0'
  }
} 