/* 
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Web Design Portfolio 5 (WDPV)
   • Week 2 – Development Phase 1
   */

import React from 'react';
import { NavLink } from 'react-router-dom'
// import { IoMdClose } from 'react-icons/io'
import Close from '../images/close.svg'

// assets

const About = props => {
    // react life cycle component – render
    return (
        <div style={styles.aboutAllDiv}>
            <div style={styles.leftDiv}>

            </div>
            <section style={styles.center}>
                <article style={styles.aboutTextDiv}>
                    <header style={styles.aboutHeading}>
                        <div></div>
                        <h1 style={styles.h1} >About</h1>
                        <NavLink to="/">
                        <img src={Close} alt="Close" style={styles.close} width="30" height="30" />
                        </NavLink>
                    </header>
                    <h2 style={styles.h2} >This app will generate a functioning QR Code.</h2>
                    <h2 style={styles.h2} >Add text, select option and press the "Get It!" button. </h2>
                </article>
                <article style={styles.h1}>
                </article>
            </section>
            <div style={styles.rightDiv}>

            </div>
        </div>
    )
}

const styles = {
    aboutAllDiv: {
        margin: '1.6em 0 0 0',
        display: 'flex',
        justifyContent: 'space-between',
        color: '#414141'
    },
    aboutHeading: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    center: {
        maxWidth: '400px',
        padding: '0 .8em',
        borderRadius: '.4em',
        border: 'solid .03em',
        background: 'rgba(213, 213, 213, .7)'
    },
    aboutTextDiv: {
        alignContent: 'center',
        margin: '1.6em 0 1em 0'
    },
    h1: {
        
        textDecoration: 'underline',
        fontWeight: '900',
        margin: '0 0 .5em 2em'
    },
    close: {
        margin: '-.7em 0.3em 0 0',
        transform: 'translate(-15%, -70%)'
    },
    leftDiv: {
        width: '10%'
    },
    rightDiv: {
        width: '10%'
    }
}

export default About