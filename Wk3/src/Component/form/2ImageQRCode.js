/* 
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Web Design Portfolio 5 (WDPV)
   • Week 2 – Development Phase 1
   */

  import React, { Component } from 'react'
import QRPlaceholder from './images/QRPlaceholder.svg'
// import APICall from './APICall.js'


class QRCodeSection extends Component {

    render(){

    return (
      <div style={styles.imageContainer} >
        <img src={QRPlaceholder} height="175" width="175" alt="QR Code" style={styles.QRCode} />  
      </div>
    )
  }

}

  export default QRCodeSection
  
  const styles = {
    QRCode: {
    },
    imageContainer: {
      margin: '1em auto 1em auto',
      paddingTop: '.38em',
      height: '195px',
      width: '195px',
      background: 'rgb(213, 213, 213)',
      borderRadius: '1em'
    }
  }