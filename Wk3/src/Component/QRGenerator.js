import React, { Component } from 'react'

//image files
import Download from '../images/download.svg'
import QRCode from '../images/QRPlaceholder.svg'


class Generator extends Component {
    //create state object that will take code input values for concatenation to a url that will be sent to the QR Code API via GET fetch()
    state = {

    }

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <main>
                
                <form style={styles.inputForm}>
                    {/* QR Code Image and Send/Save Buttons */}
                    <section style={styles.qrCodeImageButtons}>
                        {/* QR Code Image */}
                        <article style={styles.imageContainer} >
                            <img src={QRPlaceholder} height="175" width="175" alt="QR Code" style={styles.QRCode} />
                        </article>
                        {/* QR Code Buttons */}
                        <article style={styles.qrCodeButtons}>
                            <button style={styles.buttonSend}>Send</button>
                            <button style={styles.buttonSave}>Save</button>
                            <img src={Download} alt="Info" style={styles.download} />
                        </article>
                    </section>
                    {/* QR Code name and text input fields */}
                    <section style={styles.nameTextFields}>
                        {/* QR Code Name Input */}
                        <article style={styles.codeName}>
                            <input type='text'
                                style={styles.input}
                                name="QR Code Name"
                                value={props.postTitle}
                                onChange={props.liveUpdateTitle}
                                placeholder=" Code Name" />
                        </article>
                        {/* QR Code Text Input */}
                        <article style={styles.codeText}>>
                        <textarea
                                style={styles.input}
                                name="QR Code Text"
                                rows="10" cols="30"
                                value={props.postTitle}
                                onChange={props.liveUpdateTitle}
                                placeholder=" Code Text" />
                        </article>
                    </section>
                    {/* QR Code Radio Buttons */}
                    <section style={styles.radios}>
                        {/* QR Code Image Size And File Type */}
                        <article style={styles.imageSizeType}>
                            {/* QR Code Image Size */}
                            <div style={styles.radioGroupDiv}>
                                <h1 style={styles.H2}>Code Size</h1>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        for="format"
                                        name="format"
                                        style={styles.input}
                                        value='svg'
                                        onChange={props.liveUpdateTitle} />
                                    <label style={styles.label}>Small</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        for="format"
                                        name="format"
                                        style={styles.input}
                                        value='png'
                                        onChange={props.liveUpdateTitle} />
                                    <label style={styles.label}>Medium</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        for="format"
                                        name="format"
                                        style={styles.input}
                                        value='jpg'
                                        onChange={props.liveUpdateTitle} />
                                    <label style={styles.label}>Large</label>
                                </div >
                            </div >
                            {/* QR Code Image File Format */}
                            <div id="format" style={styles.radioGroupDiv}>
                                <h2 style={styles.H2}>File Format</h2>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        for="format"
                                        name="format"
                                        style={styles.input}
                                        value='svg'
                                        onChange={props.liveUpdateTitle} />
                                    <label style={styles.label}>svg</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        for="format"
                                        name="format"
                                        style={styles.input}
                                        value='png'
                                        onChange={props.liveUpdateTitle} />
                                    <label style={styles.label}>png</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        for="format"
                                        name="format"
                                        style={styles.input}
                                        value='jpg'
                                        onChange={props.liveUpdateTitle} />
                                    <label style={styles.label}>jpg</label>
                                </div>
                            </div>
                        </article>
                        {/* QR Code Image Colors*/}
                        <article style={styles.imageColors}>
                            {/* QR Code Image Foreground Color */}
                            <div style={styles.imageForegroundColor}>
                                <h1 style={styles.H2}>FG Color</h1>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        for="format"
                                        name="format"
                                        style={styles.input}
                                        value='svg'
                                        onChange={props.liveUpdateTitle} />
                                    <label style={styles.label}>Lt Grey</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        for="format"
                                        name="format"
                                        style={styles.input}
                                        value='png'
                                        onChange={props.liveUpdateTitle} />
                                    <label style={styles.label}>Lt Blue</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        for="format"
                                        name="format"
                                        style={styles.input}
                                        value='jpg'
                                        onChange={props.liveUpdateTitle} />
                                    <label style={styles.label}>Lt Red</label>
                                </div>
                            </div>
                            {/* QR Code Image Background Color */}
                            <div style={styles.imageBackgroundColor}>
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
                            </div>
                        </article>
                        {/* QR Code Image Error Correction & Border */}
                        <article style={styles.imageCorrectionBorder}>
                            {/* QR Code Image Error Correction */}
                            <div style={styles.imageCorrection}>
                                <h1 style={styles.H2}>Error Correct</h1>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        for="format"
                                        name="format"
                                        style={styles.input}
                                        value='svg'
                                        onChange={props.liveUpdateTitle} />
                                    <label style={styles.label}>low</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        for="format"
                                        name="format"
                                        style={styles.input}
                                        value='png'
                                        onChange={props.liveUpdateTitle} />
                                    <label style={styles.label}>high</label>
                                </div>
                            </div>
                            {/* QR Code Image Border */}
                            <div style={styles.imageBorder}>
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
                            </div>
                        </article>
                    </section>
                </form>

            </main>

        )
    }
}

// set up default radio values
// rework saved u/i
// circle I icon for info
// favicon
// 

const styles = {
    inputForm: {
        // QR Code Image
    },
    imageContainer: {
        margin: '1em auto 1em auto',
        paddingTop: '.38em',
        height: '195px',
        width: '195px',
        background: 'rgb(213, 213, 213)',
        borderRadius: '1em'
    },
    QRCode: {
    },
    // Send Save Buttons
    qrCodeButtons: {
    },
    buttonSend: {
        dispay: 'inline',
        marginRight: '.5em',
        background: 'rgb(237 237 237)',
        color: 'rgb(081 081 081)',
        width: '3.5em',
        borderRadius: '.3em'
    },
    buttonSave: {
        marginRight: '.5em',
        background: 'rgb(237 237 237)',
        color: 'rgb(081 081 081)',
        width: '3.5em',
        borderRadius: '.3em'
    },
    downloadIcon: {
        paddingTop: ".2em",
        margin: '0',
    },
    // QR Code Name
    codeName: {
    },
    input: {
        marginBottom: '.2em',
        'width': '80%',
        'maxWidth': '13em',
        borderRadius: '.3em'
    },
    // QR Code Text
    codeText: {
    },
    input: {
        marginBottom: '.2em',
        'width': '78.5%',
        'maxWidth': '25em',
        borderRadius: '1em',
        resize: 'none'
    },
    // Radio Buttons
    H2: {
    },
    radioGroupDiv: {
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
    // Image Size
    // Image Size and Type
    imageSizeType: {
    },
    // Radio Buttons
    imageSize: {
    },
    // Radio Buttons
    imageType: {
    },
    // Image Colors
    imageColors: {
    },
    // Image Foreground Color
    imageForeground: {
    },
    // Image Background Color
    imageBackground: {
    },
    // Image Border Correction
    imageCorrectionBorder: {
    },
    // Image Border
    imageCorrection: {
    },
    // Image Correction
    imageBorder: {
    }
}
