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
    <form style={styles.codeTextDiv}>
      <input type='text'
        style={styles.input}
        name="QR Code Text"
        value={props.postTitle}
        onChange={props.liveUpdateTitle}
        placeholder=" Code Text" />
    </form>
  )
}
export default Name

const styles = {
  codeTextDiv: {
  },
  input: {
    'width': '90%',
    'maxWidth': '10em',
    borderRadius: '.3em'
  }
} 