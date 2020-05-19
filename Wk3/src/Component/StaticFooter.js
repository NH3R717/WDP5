/* 
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Web Design Portfolio 5 (WDPV)
   • Week 2 – Development Phase 1
   */

import React from 'react'

// Functional Component
const Name = props => {
  return (
    <div style={styles.footerDiv}>
      <h3 style={styles.h3}>© 2020 Supers Cafe</h3>
    </div>
  )
}
export default Name

const styles = {
footerDiv: {
    display: 'flex',
    padding: '.3em 0',
    background: 'rgb(213 213 213)'
  },
  h3: {
    fontSize: '.7em',
    marginLeft: '.4em'
  }
} 