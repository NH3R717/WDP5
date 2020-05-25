import React, { Component } from 'react'

//image files
// import Download from '../images/download.svg'
import QRPlaceholder from '../images/QRPlaceholder.svg'
import '../mediaQueries.css'




class GeneratorComp extends Component {
    //create state object that will take code input values for concatenation to a url that will be sent to the QR Code API via GET fetch()
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://api.qrserver.com/v1/create-qr-code/?data=',
            QRCodeText: '',
            imageSize: '',
            FGColor: '',
        };
        this.changeHandler = this.changeHandler.bind(this);
        console.log(this.state)
    }
    componentDidMount() { }

    getCode = () => {

        // let codeURL = `${this.state.url}${this.state.QRCodeText}${this.state.imageSize}${this.state.FGColor}`

        const codeURL = "http://api.qrserver.com/v1/create-qr-code/?data=%2BQR+%20Code+%20Test%2B&size=100x100"

        fetch(codeURL, {
            method: 'GET',
            // headers: {
            //     'Content-Type': 'img'
            // },
            mode: 'cors',
        })
            .then(document.querySelector("#QRimage").innerHTML = codeURL)
            .then(console.log(codeURL))
            .catch(error => console.log('There was an error', error))
        console.log(codeURL);
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
        // this.setState({text: event.target.value});
        console.log(this.state)
    }

    render() {

        // let showQRCode =
        //     (function showQRCode() {

        //         const codeUrl = "https://api.qrserver.com/v1/create-qr-code/?data=Cheesy%20Code&size=500x500&ecc=H&color=E5312C&bgcolor=0000ff&margin=20&format=png"

        //         let generateHTML = ''

        //         fetch(codeUrl, {
        //             method: 'GET',
        //             // headers: {
        //             //     'Content-Type': 'img'
        //             // },
        //             mode: 'cors',
        //         })
        //             .then(response => {
        //                 generateHTML(response);
        //             })
        //             .catch(error => console.log(`Error message ${error}`));

        //         generateHTML = (data) => {
        //             const html = `<img src=${data.url}height="175" width="175">`
        //             console.log(data.url);
        //             console.log(html);
        //             console.log(codeUrl);
        //             const qrElement = document.querySelector('#QRimage');
        //             console.log(qrElement);
        //             qrElement.innerHTML = html;
        //         }

        //     })()

        // window.addEventListener('load', function () {

        //     document.getElementById("sendButton").addEventListener("click", showQRCode);

        // });

        // className=''

        return (
            <main>
                {/* <main className='mQWebAll mQTabletAll mQPhoneAll'> */}

                {/* Appliction Form */}
                <form style={styles.inputForm}>
                    <div className='mQWebAll mQTabletAll mQPhoneAll'>
                        {/* QR Code Image and Send/Save Buttons */}
                        <section className='mQWebLeft ' id='mQImageButton' style={styles.qrCodeImageButtons}>

                            {/* QR Code Image */}
                            <article style={styles.imageContainer} >
                                <div id='QRimage' src={QRPlaceholder}
                                    height="175" width="175" alt="QR Code" style={styles.QRCode} />
                            </article>

                            {/* QR Code Buttons */}
                            <article style={styles.qrCodeButtons}>
                                <button id='sendButton' style={styles.buttonSend}>Get It!</button>
                                <button id='savedButton' style={styles.buttonSave}>Saved</button>
                                {/* <img src={Download} alt="Info" style={styles.download} /> */}
                            </article>
                        </section>

                        {/* QR Code name and text input fields */}
                        <div className='mQWebRight '>
                            <section style={styles.nameTextFields}>

                                {/* QR Code Name Input */}
                                <article style={styles.codeName}>
                                    <input type='text'
                                        style={styles.nameFieldInput}
                                        name="QRCodeName"
                                        placeholder=" Code Name"
                                        onChange={this.changeHandler}
                                    />

                                </article>

                                {/* QR Code Text Input */}
                                <article style={styles.codeText}>
                                    <textarea
                                        style={styles.textFieldInput}
                                        name="QRCodeText"
                                        rows="5" cols="30"
                                        placeholder=" Code Text"
                                        onChange={this.changeHandler}
                                    />
                                </article>
                            </section>

                            {/* QR Code Radio Buttons (all) */}
                            <section style={styles.radios}>
                                {/* Radio Group (3) 1 of 2 */}
                                <article className='mQWebRightRadio1 '>
                                    {/* QR Code Image Size */}
                                    <div style={styles.radioGroupDiv}>
                                        <h1 style={styles.H2}>Code Size</h1>
                                        <div style={styles.inputLabel}>
                                            <input
                                                type='radio'
                                                style={styles.radioInput}
                                                name="imageSize"
                                                value='&size=150x150'
                                                onChange={this.changeHandler}
                                            />
                                            <label style={styles.label}>Small</label>
                                        </div>
                                        <div style={styles.inputLabel}>
                                            <input
                                                type='radio'
                                                checked='checked'
                                                style={styles.radioInput}
                                                name="imageSize"
                                                value='&size=350x350'
                                                onChange={this.changeHandler}
                                            />
                                            <label style={styles.label}>Medium</label>
                                        </div>
                                        <div style={styles.inputLabel}>
                                            <input
                                                type='radio'
                                                style={styles.radioInput}
                                                name="imageSize"
                                                value='&size750x750'
                                                onChange={this.changeHandler}
                                            />
                                            <label style={styles.label}>Large</label>
                                        </div >
                                    </div>{/* QR Code Image Size */}


                                    {/* QR Code Image File Format */}
                                    <div id="format" style={styles.radioGroupDiv}>
                                        <h2 style={styles.H2}>File Format</h2>
                                        <div style={styles.inputLabel}>
                                            <input
                                                type='radio'
                                                style={styles.radioInput}
                                                checked='checked'
                                                name="fileFormat"
                                                value='&format=svg'
                                                onChange={this.changeHandler}
                                            />
                                            <label style={styles.label}>svg</label>
                                        </div>
                                        <div style={styles.inputLabel}>
                                            <input
                                                type='radio'
                                                style={styles.radioInput}
                                                name="fileFormat"
                                                value='&format=png'
                                                onChange={this.changeHandler}
                                            />
                                            <label style={styles.label}>png</label>
                                        </div>
                                        <div style={styles.inputLabel}>
                                            <input
                                                type='radio'
                                                style={styles.radioInput}
                                                name="fileFormat"
                                                value='&format=jpg'
                                                onChange={this.changeHandler}
                                            />
                                            <label style={styles.label}>jpg</label>
                                        </div>
                                    </div>{/* QR Code Image File Format */}


                                    {/* QR Code Image Foreground Color */}
                                    <div style={styles.imageForegroundColor}>
                                        <h1 style={styles.H2}>FG Color</h1>
                                        <div style={styles.inputLabel}>
                                            <input
                                                type='radio'
                                                style={styles.radioInput}
                                                checked='checked'
                                                name="FGColor"
                                                value='&color=EDEDED'
                                                onChange={this.changeHandler}
                                            />
                                            <label style={styles.label}>Lt Grey</label>
                                        </div>
                                        <div style={styles.inputLabel}>
                                            <input
                                                type='radio'
                                                style={styles.radioInput}
                                                name="FGColor"
                                                value='&color=E9F5FF'
                                                onChange={this.changeHandler}
                                            />
                                            <label style={styles.label}>Lt Blue</label>
                                        </div>
                                        <div style={styles.inputLabel}>
                                            <input
                                                type='radio'
                                                style={styles.radioInput}
                                                name="FGColor"
                                                value='&color=FFB7B5'
                                                onChange={this.changeHandler}
                                            />
                                            <label style={styles.label}>Lt Red</label>
                                        </div>
                                    </div>{/* QR Code Image Foreground Color */}
                                </article> {/* Radio Group (3) 1 of 2 */}

                                {/* Radio Group (3) 2 of 2 */}
                                <article className='mQWebRightRadio2 '>
                                    {/* QR Code Image Background Color */}
                                    <div style={styles.imageBackgroundColor}>
                                        <h1 style={styles.H2}>BG Color</h1>
                                        <div style={styles.inputLabel}>
                                            <input
                                                type='radio'
                                                style={styles.radioInput}
                                                checked='checked'
                                                name="BGColor"
                                                value='&bgcolor=414141'
                                                onChange={this.changeHandler}
                                            />
                                            <label style={styles.label}>Dk Grey</label>
                                        </div>
                                        <div style={styles.inputLabel}>
                                            <input
                                                type='radio'
                                                style={styles.radioInput}
                                                name="BGColor"
                                                value='&bgcolor=E5312C'
                                                onChange={this.changeHandler}
                                            />
                                            <label style={styles.label}>Dk Blue</label>
                                        </div>
                                        <div style={styles.inputLabel}>
                                            <input
                                                type='radio'
                                                style={styles.radioInput}
                                                name="BGColor"
                                                value='&bgcolor=3F2CE5'
                                                onChange={this.changeHandler}
                                            />
                                            <label style={styles.label}>Dk Red</label>
                                        </div>
                                    </div>{/* QR Code Image Background Color */}


                                    {/* QR Code Image Error Correction */}
                                    <div style={styles.imageCorrection}>
                                        <h1 style={styles.H2}>Error Correct</h1>
                                        <div style={styles.inputLabel}>
                                            <input
                                                type='radio'
                                                style={styles.radioInput}
                                                checked='checked'
                                                name="errorCorrect"
                                                value='&ecc=L'
                                                onChange={this.changeHandler}
                                            />
                                            <label style={styles.label}>low</label>
                                        </div>
                                        <div style={styles.inputLabel}>
                                            <input
                                                type='radio'
                                                style={styles.radioInput}
                                                name="errorCorrect"
                                                value='&ecc=H'
                                                onChange={this.changeHandler}
                                            />
                                            <label style={styles.label}>high</label>
                                        </div>
                                    </div>{/* QR Code Image Error Correction */}


                                    {/* QR Code Image Border */}
                                    <div style={styles.imageBorder}>
                                        <h1 style={styles.H2}>Code Border</h1>
                                        <div style={styles.inputLabel}>
                                            <input
                                                type='radio'
                                                style={styles.radioInput}
                                                name="codeBorder"
                                                value='&margin=0'
                                                onChange={this.changeHandler}
                                            />
                                            <label style={styles.label}>none</label>
                                        </div>
                                        <div style={styles.inputLabel}>
                                            <input
                                                type='radio'
                                                style={styles.radioInput}
                                                checked='checked'
                                                name="codeBorder"
                                                value='&margin=8'
                                                onChange={this.changeHandler}
                                            />
                                            <label style={styles.label}>thin</label>
                                        </div>
                                        <div style={styles.inputLabel}>
                                            <input
                                                type='radio'
                                                style={styles.radioInput}
                                                name="codeBorder"
                                                value='&margin=20'
                                                onChange={this.changeHandler}
                                            />
                                            <label style={styles.label}>thick</label>
                                        </div>
                                    </div>{/* QR Code Image Border */}
                                </article>{/* Radio Group (3) 2 of 2 */}
                            </section>
                        </div>
                    </div>
                </form>

            </main >

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
        borderRadius: '2em'
    },

    // Send Save Buttons
    qrCodeImageButtons: {
    },
    buttonSend: {
        display: 'inline',
        margin: '0 .25em',
        background: 'rgb(237 237 237)',
        color: 'rgb(081 081 081)',
        width: '4em',
        borderRadius: '.3em'
    },
    buttonSave: {
        margin: '0 .25em',
        background: 'rgb(237 237 237)',
        color: 'rgb(081 081 081)',
        width: '4em',
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
    // radios: {
    //     margin: '1em auto',
    //     color: 'rgb(065 065 065)'
    // },
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
