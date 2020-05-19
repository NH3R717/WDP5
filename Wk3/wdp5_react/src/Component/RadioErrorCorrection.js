
/*
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Web Design Portfolio 5 (WDPV)
   • Week 2 – Development Phase 1
   */

import React from 'react'
import QRPlaceholder from '../images/QRPlaceholder.svg'

  // Functional Component
  const Name = props => {
      return (
        <div>
        <img src={QRPlaceholder} alt="QR Code" style={styles.QRCode} />
    </div>
      )
  }
  export default Name
  
const styles = {
    QRCode: {
    },
    element2: {
        display: 'flex',
        margin: '1em 0 0 0'
    }
} 