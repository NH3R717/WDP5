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
    <div style={styles.foregroundColorDiv}>
      <input type='text'
        style={styles.input}
        name="QR Code Background Color"
        value={props.postTitle}
        onChange={props.liveUpdateTitle}
        placeholder="Foreground Color Hex" />
    </div>
  )
}
export default Name

const styles = {
  foregroundColorDiv: {
  },
  element2: {
    display: 'flex',
    margin: '1em 0 0 0'
  }
}