import React from 'react';
import { NavLink } from 'react-router-dom'

// assets
// import Close from '../images/close.svg'

const About = props => {
    return (
        <div>
            <h1 style={styles.h1} >About</h1>
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