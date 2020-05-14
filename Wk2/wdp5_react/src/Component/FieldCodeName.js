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
    <form style={styles.codeNameDiv}>
      <input type='text'
        style={styles.input}
        name="QR Code Name"
        value={props.postTitle}
        onChange={props.liveUpdateTitle}
        placeholder=" Code Name"
        
      />
    </form>
  )
}
export default Name

const styles = {
  codeNameDiv: {
    // display: 'flex',
    // width: '20px'
  },
  input: {
    'width': '90%',
    'maxWidth': '10em',
    borderRadius: '.3em'
  }

  
}
// ::placeholder { 
//   color: red;

// }