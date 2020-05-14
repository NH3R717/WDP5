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
    <form id="format" style={styles.fileFormatDiv}>
      <input type='radio'
        for="format"
        name="format"
        style={styles.input}
        value={props.postTitle}
        onChange={props.liveUpdateTitle} />
      <label style={styles.label}>svg</label>
      <input type='radio'
        for="format"
        name="format"
        style={styles.input}
        value={props.postTitle}
        onChange={props.liveUpdateTitle} />
      <label style={styles.label}>png</label>
      <input type='radio'
        for="format"
        name="format"
        style={styles.input}
        value={props.postTitle}
        onChange={props.liveUpdateTitle} />
      <label style={styles.label}>jpg</label>
    </form>
    // <form style={styles.fileFormatDiv}>
    //   <input type='text'
    //     style={styles.input}
    //     value={props.postTitle}
    //     onChange={props.liveUpdateTitle}
    //     placeholder="Saved File Format" />
    // </form>
  )
}
export default Name

const styles = {
  fileFormatDiv: {
    display: 'block',
    margin: '0 auto'
  },
  input: {
    display: 'inline-block',
    margin: '0 .2em',
  },
  label: {
    marginRight: '.2em',
  },
}