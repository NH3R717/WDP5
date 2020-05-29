/* 
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Web Design Portfolio 5 (WDPV)
   • Week 2 – Development Phase 1
   */

import React from 'react'
import { NavLink } from 'react-router-dom'
import About from '../images/info.svg'

const Header = () => {
  return (
    <div style={styles.headerDiv}>
      {/* <NavLink to="/">  */}
        <h1 style={styles.h1}>QR Code Generator</h1>
        {/* </NavLink> */}
      <NavLink to="/about">
      <img src={About} alt="Info" style={styles.ellipsis} width="30" height="30" fill="FFFFF" />
      </NavLink>
    </div>
  )
}

export default Header

const styles = {
  headerDiv: {
    color: 'rgb(065 065 065)',
    display: 'flex',
    padding: '.4em 0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: 'rgba(213, 213, 213, 0.6)',
    borderBottom: 'solid .03em'
  },
  h1: {
    fontSize: '.95em',
    margin: '.34em 0 0 1.1em',
    textShadow: '.06em .06em rgba(65, 65, 65, 0.3)'
  },
  ellipsis: {
    margin: '.25em .5em 0 0',
    border: 'none',
    background: 'none'
  }
} 