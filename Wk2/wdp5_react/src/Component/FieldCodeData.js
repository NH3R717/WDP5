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
    <div style={styles.codeTextDiv}>
      <input type='text'
        style={styles.input}
        name="QR Code Text"
        value={props.postTitle}
        onChange={props.liveUpdateTitle}
        placeholder="Code Text" />
    </div>
  )
}
export default Name

const styles = {
  codeTextDiv: {
  },
  element2: {
    display: 'flex',
    margin: '1em 0 0 0'
  }
} 