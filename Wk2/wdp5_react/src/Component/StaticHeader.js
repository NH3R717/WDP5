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
      <img src={Ellipsis} alt="Info" style={styles.ellipsis} />
    </div>
  )
}
export default Name

const styles = {
  headerDiv: {
    display: 'flex',
    padding: '.4em 0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: 'rgb(173, 173, 173)',
    // border: '1px solid rgb(112, 112, 112)'
  },
  h1: {
    lineHeight: '100%',
    marginLeft: '.5em'
  },
  ellipsis: {
    display: '',
    margin: '0 .4em 0 0'

  }
} 