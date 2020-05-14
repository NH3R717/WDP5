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
      <div style={styles.headerDiv}>
        <h3 style={styles.h1}>© 2020 Supers Cafe</h3>
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