import React, { Component } from 'react'

//image files
// import Download from '../images/download.svg'
import QRPlaceholder from '../images/QRPlaceholder.svg'


class GeneratorComp extends Component {
    //create state object that will take code input values for concatenation to a url that will be sent to the QR Code API via GET fetch()
    state = {

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
                            {/* <img src={Download} alt="Info" style={styles.download} /> */}
                        </article>
                    </section>
                    {/* QR Code name and text input fields */}
                    <section style={styles.nameTextFields}>
                        {/* QR Code Name Input */}
                        <article style={styles.codeName}>
                            <input type='text'
                                style={styles.nameFieldInput}
                                name="QRCodeName"
                                placeholder=" Code Name" />
                        </article>
                        {/* QR Code Text Input */}
                        <article style={styles.codeText}>
                            <textarea
                                style={styles.textFieldInput}
                                name="QRCodeText"
                                rows="5" cols="30"
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
                                        style={styles.radioInput}
                                        name="imageSize"
                                        value='150'
                                    />
                                    <label style={styles.label}>Small</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        checked='checked'
                                        style={styles.radioInput}
                                        name="imageSize"
                                        value='350'
                                    />
                                    <label style={styles.label}>Medium</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        style={styles.radioInput}
                                        name="imageSize"
                                        value='750'
                                    />
                                    <label style={styles.label}>Large</label>
                                </div >
                            </div >
                            {/* QR Code Image File Format */}
                            <div id="format" style={styles.radioGroupDiv}>
                                <h2 style={styles.H2}>File Format</h2>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                    style={styles.radioInput}
                                        checked='checked'
                                        name="fileFormat"
                                        value='svg'
                                    />
                                    <label style={styles.label}>svg</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        style={styles.radioInput}
                                        name="fileFormat"
                                        value='png'
                                    />
                                    <label style={styles.label}>png</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        style={styles.radioInput}
                                        name="fileFormat"
                                        value='jpg'
                                    />
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
                                        name="format"
                                        style={styles.radioInput}
                                        value='EDEDED' 
                                    />
                                    <label style={styles.label}>Lt Grey</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        name="format"
                                        style={styles.radioInput}
                                        value='E9F5FF'
                                    />
                                    <label style={styles.label}>Lt Blue</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        name="format"
                                        style={styles.radioInput}
                                        value='FFB7B5'
                                    />
                                    <label style={styles.label}>Lt Red</label>
                                </div>
                            </div>
                            {/* QR Code Image Background Color */}
                            <div style={styles.imageBackgroundColor}>
                                <h1 style={styles.H2}>BG Color</h1>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        name="format"
                                        style={styles.radioInput}
                                        value='414141'
                                    />
                                    <label style={styles.label}>Dk Grey</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        name="format"
                                        style={styles.radioInput}
                                        value='E5312C'
                                    />
                                    <label style={styles.label}>Dk Blue</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        name="format"
                                        style={styles.radioInput}
                                        value='3F2CE5'
                                    />
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
                                        name="format"
                                        style={styles.radioInput}
                                        value='svg'
                                    />
                                    <label style={styles.label}>low</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        name="format"
                                        style={styles.radioInput}
                                        value='png'
                                    />
                                    <label style={styles.label}>high</label>
                                </div>
                            </div>
                            {/* QR Code Image Border */}
                            <div style={styles.imageBorder}>
                                <h1 style={styles.H2}>Code Border</h1>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        name="format"
                                        style={styles.radioInput}
                                        value='svg'
                                    />
                                    <label style={styles.label}>none</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        name="format"
                                        style={styles.radioInput}
                                        value='png'
                                    />
                                    <label style={styles.label}>thin</label>
                                </div>
                                <div style={styles.inputLabel}>
                                    <input type='radio'
                                        name="format"
                                        style={styles.radioInput}
                                        value='jpg'

                                    />
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

export default GeneratorComp

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
    qrCodeImageButtons: {
        // background: 'rgb(195 231 246)'
    },
    //     qrCodeButtons: {
    //         margin: 'auto;
    //   width: 50%;
    //     },
    buttonSend: {
        display: 'inline',
        margin: '0 .25em',
        background: 'rgb(237 237 237)',
        color: 'rgb(081 081 081)',
        width: '3.5em',
        borderRadius: '.3em'
    },
    buttonSave: {
        margin: '0 .25em',
        background: 'rgb(237 237 237)',
        color: 'rgb(081 081 081)',
        width: '3.5em',
        borderRadius: '.3em'
    },
    downloadIcon: {
        paddingTop: ".2em",
        margin: '0'
    },
    // Text Input Fields
    nameTextFields: {
        margin: '1em auto',
        width: '80%',
        maxWidth: '13em'
    },
    // QR Code Name
    codeName: {
        margin: '0 0 1em .21em'
    },
    // input: {
    //     marginBottom: '.2em',
    //     width: '100%',
    //     borderRadius: '.3em'
    // },
    // QR Code Text
    codeText: {
    },
    nameFieldInput: {
        margin: 'auto',
        width: '100%',
        borderRadius: '.6em'
    },
    textFieldInput: {
        fontSize: '.6em',
        margin: 'auto',
        width: '100%',
        resize: 'none',
        borderRadius: '.8em'
    },
    // Radio Buttons
    H2: {
    },
    radios: {
        margin: '1em auto',
        color: 'rgb(065 065 065)'
    },
    radioGroupDiv: {
        display: 'block',
        margin: '.6em auto'
    },
    inputLabel: {
        display: 'inline-block',
        margin: '0 .4em'
    },
    radioInput: {
        display: 'block',
        textAlign: 'center',
        margin: 'auto'
    },
    label: {
        color: 'rgb(90 90 90)',
        margin: '0 auto',
        textAlign: 'center',
        fontSize: '.7em'
    },
    // Radio Buttons
    // Image Size and Type
    imageSizeType: {
    },
    // Image Size
    imageSize: {

    },
    // Radio Type
    imageType: {

    },
    // Image Colors
    imageColors: {
        margin: '.6em auto'
    },
    // Image Foreground Color
    imageForegroundColor: {
        margin: '.6em auto'
    },
    // Image Background Color
    imageBackgroundColor: {
        margin: '.6em auto'
    },
    // Image Border Correction
    imageCorrectionBorder: {
        margin: '.6em auto'
    },
    // Image Border
    imageCorrection: {
        margin: '.6em auto'
    },
    // Image Correction
    imageBorder: {

    }
}
