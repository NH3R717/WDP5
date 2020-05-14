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
    <form style={styles.fileFormatDiv}>
      <input type='text'
        style={styles.input}
        value={props.postTitle}
        onChange={props.liveUpdateTitle}
        placeholder=" File Format" />
    </form>
  )
}
export default Name

const styles = {
  fileFormatDiv: {
  },
  input: {
    marginBottom: '.2em',
    'width': '80%',
    'maxWidth': '13em',
    borderRadius: '.3em'
  }
}