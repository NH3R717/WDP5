import React from 'react';
import { NavLink } from 'react-router-dom'
// import { IoMdClose } from 'react-icons/io'
import Close from '../images/close.svg'


// assets
// import Close from '../images/close.svg'

const About = props => {
    return (
        <div style={styles.aboutAllDiv}>
            <div style={styles.leftDiv}>

            </div>
            <section style={styles.center}>
            <article style={styles.aboutTextDiv}>
                <h1 style={styles.h1} >About</h1>
                <h2 style={styles.h2} >This app will generate a functioning QR Code.</h2>
                <h2 style={styles.h2} >Add title, add text and press the "Get It!" button. </h2>
            </article>
            <article style={styles.h1}>
                <NavLink to="/">
                    {/* <img src={IoMdClose} alt="Close" style={styles.close} width="30" height="30" /> */}
                    <img src={Close} alt="Close" style={styles.close} width="30" height="30" />
                </NavLink>
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
    center: {
        display: 'flex'
    },
    aboutTextDiv: {
        // width: '20em',
        // display: 'flex',
        alignContent: 'center',
        margin: '1.6em 0 1.6em 0'
    },
    h1: {
        textDecoration: 'underline',
        fontWeight: '900',
        margin: '0 0 .5em 0'
    },
    close: {
        margin: '0.3em 0.3em 0 0',
    },
    leftDiv: {
        width: '10%'
    },
    rightDiv: {
        width: '10%'
    }
}

export default About