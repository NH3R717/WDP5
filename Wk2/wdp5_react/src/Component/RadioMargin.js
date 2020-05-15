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
      <h1 style={styles.H2}>Code Border</h1>
      <div style={styles.inputLabel}>
        <input type='radio'
          for="format"
          name="format"
          style={styles.input}
          value='svg'
          onChange={props.liveUpdateTitle} />
        <label style={styles.label}>none</label>
      </div>
      <div style={styles.inputLabel}>
        <input type='radio'
          for="format"
          name="format"
          style={styles.input}
          value='png'
          onChange={props.liveUpdateTitle} />
        <label style={styles.label}>thin</label>
      </div>
      <div style={styles.inputLabel}>
        <input type='radio'
          for="format"
          name="format"
          style={styles.input}
          value='jpg'
          onChange={props.liveUpdateTitle} />
        <label style={styles.label}>thick</label>
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
    margin: '0 auto',
    textAlign: 'center',
    fontSize: '.7em'
  },
}

// const Name = props => {
//   return (
//     <form style={styles.marginSizeDiv}>
//       <input type='text'
//         style={styles.input}
//         name="Margin Size"
//         value={props.postTitle}
//         onChange={props.liveUpdateTitle}
//         placeholder=" Margin Size" />
//     </form>
//   )
// }
// export default Name

// const styles = {
//   marginSizeDiv: {
//   },
//   input: {
//     marginBottom: '.2em',
//     'width': '80%',
//     'maxWidth': '13em',
//     borderRadius: '.3em'
//   }
// }