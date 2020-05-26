import React from 'react';
import { NavLink } from 'react-router-dom'
// import { IoMdClose } from 'react-icons/io'
import Close from '../images/close.svg'


// assets
// import Close from '../images/close.svg'

const About = props => {
    return (
        <div style={styles.aboutAll}>
            <div style={styles.leftDiv}>

            </div>
            <div style={styles.aboutText}>
                <h1 style={styles.h1} >About</h1>
                <h2 style={styles.h1} >This app will generate a functioning QR Code.</h2>
                <h2 style={styles.h1} >Add title, add text and press the "Get It!" button. </h2>
            </div>
            <div style={styles.h1}>
                <NavLink to="/">
                    {/* <img src={IoMdClose} alt="Close" style={styles.close} width="30" height="30" /> */}
                    <img src={Close} alt="Close" style={styles.close} width="30" height="30" />
                </NavLink>
            </div>
            <div style={styles.rightDiv}>

            </div>
        </div>
    )
}

const styles = {
    aboutAll: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#414141'
    },
    aboutText: {
        width: '20em',
        // display: 'flex',
        alignContent: 'center'
    },
    h1: {
        // QR Code Image
    },
    close: {
        margin: '0.3em 0.3em 0 0',
    },
    leftDiv: {
        width: '60%'
    },
    rightDiv: {
        width: '60%'
    }
}

export default About