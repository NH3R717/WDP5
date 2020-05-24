import React from 'react';
import { NavLink } from 'react-router-dom'

// assets
// import Close from '../images/close.svg'

const About = props => {
    return (
        <div>
            <h1 style={styles.h1} >About</h1>
            <h2 style={styles.h1} >This app will generate a functioning QR Code</h2>
            <h2 style={styles.h1} >Add title, add text and press the "Get It!" </h2>
            <NavLink to="/">
                {/* <img src={Close} alt="Close" style={styles.close} width="30" height="30" /> */}
            </NavLink>
        </div>
    )
}

const styles = {
    h1: {
        // QR Code Image
    }
    // close: {
    //     // QR Code Image
    // }
}

// add 

// about info (in flex box)
// close icon ()

export default About