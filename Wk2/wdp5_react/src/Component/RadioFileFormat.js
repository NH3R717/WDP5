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
        <input type='radio'
          style={styles.input}
          value={props.postTitle}
          onChange={props.liveUpdateTitle}
          placeholder="Saved File Format" />
      </form>
    )
  }
  export default Name
  
  const styles = {
    fileFormatDiv: {
    },
    element2: {
      display: 'flex',
      margin: '1em 0 0 0'
    }
  }