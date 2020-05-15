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
      <h1 style={styles.H2}>BG Color</h1>
      <div style={styles.inputLabel}>
        <input type='radio'
          for="format"
          name="format"
          style={styles.input}
          value='svg'
          onChange={props.liveUpdateTitle} />
        <label style={styles.label}>Dk Grey</label>
      </div>
      <div style={styles.inputLabel}>
        <input type='radio'
          for="format"
          name="format"
          style={styles.input}
          value='png'
          onChange={props.liveUpdateTitle} />
        <label style={styles.label}>Dk Blue</label>
      </div>
      <div style={styles.inputLabel}>
        <input type='radio'
          for="format"
          name="format"
          style={styles.input}
          value='jpg'
          onChange={props.liveUpdateTitle} />
        <label style={styles.label}>Dk Red</label>
      </div>
    </form>
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
    margin: '0 .4em'
  },
  input: {
    display: 'block',
    textAlign: 'center',
    margin: 'auto'
  },
  label: {
    color: 'rgb(112 112 112)',
    margin: '0 auto',
    textAlign: 'center',
    fontSize: '.7em'
  },
}

// const Name = props => {
//   return (
//     <form style={styles.backgroundColorDiv}>
//       <input type='text'
//         style={styles.input}
//         name="QR Code Background Color"
//         value={props.postTitle}
//         onChange={props.liveUpdateTitle}
//         placeholder=" BG Color" />
//     </form>
//   )
// }
// export default Name

// const styles = {
//   backgroundColorDiv: {
//   },
//   input: {
//     marginBottom: '.2em',
//     'width': '80%',
//     'maxWidth': '13em',
//     borderRadius: '.3em'
//   }
// }