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
        <div style={styles.imageContainer} >
        <img src={QRPlaceholder} height="175" width="175" alt="QR Code" style={styles.QRCode} />
    </div>
      )
  }
  export default Name
  
const styles = {
    QRCode: {
    },
  imageContainer: {
    margin: '1em auto 1em auto',
    paddingTop: '.38em',
    height: '195px',
    width: '195px',
    background: 'rgb(213, 213, 213)',
    borderRadius: '1em'
    }
} 