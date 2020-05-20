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
    color: 'rgb(065 065 065)',
    display: 'flex',
    padding: '.4em 0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: 'rgba(213, 213, 213, 0.6)',
    borderBottom: 'solid .03em'
  },
  h1: {
    fontSize: '.95em',
    lineHeight: '120%',
    margin: '.1em 0 0 .7em'
  },
  ellipsis: {
    // color: 'rgb(065 065 065)',
    margin: '0 1em 0 0'

  }
} 