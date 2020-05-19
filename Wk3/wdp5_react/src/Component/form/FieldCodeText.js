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
    <form style={styles.codeTextDiv}>
      <textarea
        style={styles.input}
        name="QR Code Text"
        rows="10" cols="30"
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
    marginBottom: '.2em',
    'width': '78.5%',
    'maxWidth': '25em',
    borderRadius: '1em',
    resize: 'none',
    color: 'blue',
    fontSize: '2em'

  }
} 