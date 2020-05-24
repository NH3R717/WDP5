/* 
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Web Design Portfolio 5 (WDPV)
   • Week 2 – Development Phase 1
   */

import React from 'react'

const Footer = props => {
  return (
    <div style={styles.footerDiv}>
      <h3 style={styles.h3}>© 2020 Supers Cafe</h3>
    </div>
  )
}
export default Footer

const styles = {
  footerDiv: {
    // marginTop: '16em',
    color: 'rgb(065 065 065)',
    display: 'flex',
    padding: '.3em 0',
    background: 'rgba(213, 213, 213, 0.6)',
    borderTop: 'solid .03em'
  },
  h3: {
    fontSize: '.6em',
    lineHeight: '120%',
    margin: '.25em 0 0 1em'
  }
} 