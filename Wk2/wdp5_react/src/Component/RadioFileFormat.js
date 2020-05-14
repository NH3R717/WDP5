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
      <h1 style={styles.H2}>File Format</h1>
      <div style={styles.inputLabel}>
        <input type='radio'
          for="format"
          name="format"
          style={styles.input}
          value={props.postTitle}
          onChange={props.liveUpdateTitle} />
        <label style={styles.label}>svg</label>
      </div>
      <div style={styles.inputLabel}>

        <input type='radio'
          for="format"
          name="format"
          style={styles.input}
          value={props.postTitle}
          onChange={props.liveUpdateTitle} />
        <label style={styles.label}>png</label>
      </div>
      <div style={styles.inputLabel}>
        <input type='radio'
          for="format"
          name="format"
          style={styles.input}
          value={props.postTitle}
          onChange={props.liveUpdateTitle} />
        <label style={styles.label}>jpg</label>
      </div>
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
    color: 'rgb(081 081 081)',
    display: 'block',
    margin: '.4em auto'
  },
  inputLabel: {
    display: 'inline-block',
    margin: '.3em .5em 0 0'
  },
  input: {
    display: 'block',
    textAlign: 'center',
    margin: 'auto'
  },
  label: {
    margin: '0.5em auto',
    textAlign: 'center'
    // marginRight: '.4em',
  },
}