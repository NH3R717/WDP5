/* 
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Web Design Portfolio 5 (WDPV)
   • Week 2 – Development Phase 1
   */

import React from 'react'
import Ellipsis from '../images/ellipsis-v.svg'

// Functional Component
const Name = props => {
  return (
    <div style={styles.headerDiv}>
      <h1 style={styles.h1}>QR Code Generator</h1>
      <img src={Ellipsis} alt="Info" style={styles.Ellipsis} />
    </div>
  )
}
export default Name

const styles = {
  headerDiv: {
    display: 'flex'
  },
  QRCode: {
  },
  Ellipsis: {
    display: 'flex',
    margin: '1em 0 0 0'
  }
} 