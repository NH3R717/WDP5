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

const Header = props => {
  return (
    <div style={styles.headerDiv}>
      <NavLink to="/">
        <h1 style={styles.h1}>QR Code Generator</h1>
        </NavLink>
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
    // lineHeight: '120%',
    margin: '.34em 0 0 1.1em'
  },
  ellipsis: {

    // color: 'rgb(065 065 065)',
    margin: '.25em .5em 0 0',
    border: 'none',
    // color: 'rgba(21, 30, 63, 1)',
    background: 'none'
  }
} 