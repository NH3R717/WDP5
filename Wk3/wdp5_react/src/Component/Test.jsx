//https://api.qrserver.com/v1/create-qr-code/?data=Cheesy%20Code&size=500x500&ecc=H&color=E5312C&bgcolor=0000ff&margin=20&format=svg

import React, { Component } from 'react'
import '../mediaQueries.css'
// import MediaQuery from 'react-responsive';

// assets
import QRPlaceholder from '../images/QRPlaceholder.svg'

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: 'https://api.qrserver.com/v1/create-qr-code/?data=',
            QRCodeText: '',
            imageSize: '',
            FGColor: '',
            imageURL: '',
        };
        this.changeHandler = this.changeHandler.bind(this);
        // console.log(this.state)
    }
    componentDidMount() { }

    getCode = (e) => {
        e.preventDefault()
        let codeURL = `${this.state.url}${this.state.QRCodeText}${this.state.imageSize}${this.state.FGColor}`

        console.log(codeURL)
        // return

        // const codeUrl = "http://api.qrserver.com/v1/create-qr-code/?data=%2BQR+%20Code+%20Test%2B&size=100x100"

        this.setState({

            imageURL: codeURL
        })

        // fetch(codeURL, {
        //     method: 'GET',
        //     // headers: {
        //     //     'Content-Type': 'img'
        //     // },
        //     mode: 'cors',
        // })

        //     .then( ()=>{ document.querySelector("#QRimage").innerHTML = codeURL})
        //     .then(console.log(codeURL))
        //     .catch(error => console.log('There was an error', error))
        // console.error("IT BROKE",codeURL)
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
        // this.setState({text: event.target.value});
        // console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.getCode} >
                {/* <MediaQuery minDeviceWidth={700}> */}
                <div id='MQHeading' style={styles.headings}>
                    <h1>Text {this.state.QRCodeText}</h1>
                    <h1>Size {this.state.imageSize}</h1>
                    <h1>Color {this.state.FGColor}</h1>
                </div>
                {/* </MediaQuery> */}
                {/* QR Code Image and Send/Save Buttons */}
                <section style={styles.qrCodeImageButtons}>

                    {/* QR Code Image */}
                    <article style={styles.imageContainer} >
                        <img id='QRimage' src={(this.state.imageURL || QRPlaceholder)} height="175" width="175" alt="QR Code" style={styles.QRCode} />
                    </article>

                    {/* QR Code Buttons */}
                    <article style={styles.qrCodeButtons}>
                        <button id='sendButton'
                            style={styles.buttonSend}
                            onClick={this.getCode}
                        >Send</button>
                        {/* <button id='savedButton' style={styles.buttonSave}>Save</button> */}
                        <input
                            type='submit'
                        />
                        {/* <img src={Download} alt="Info" style={styles.download} /> */}
                    </article>
                </section>

                <article style={styles.codeText}>
                    <textarea
                        // type='text'
                        style={styles.textFieldInput}
                        name="QRCodeText"
                        rows="5" cols="30"
                        placeholder=" Code Text"
                        onChange={this.changeHandler}
                    />
                </article>

                <input
                    type='radio'
                    // checked='checked'
                    style={styles.radioInput}
                    name="imageSize"
                    value='&size=350x350'
                    onChange={this.changeHandler}
                />
                <label style={styles.label}>Medium</label>

                <input
                    type='radio'
                    style={styles.radioInput}
                    name="FGColor"
                    value='&color=EDEDED'
                    onChange={this.changeHandler}
                />
                <label style={styles.label}>Lt Grey</label>

            </form>

        )
    }
}

const styles = {

    // headings: {
    //     color: 'lightgreen'
    // },
    imageContainer: {
        margin: '1em auto 1em auto',
        paddingTop: '.38em',
        height: '195px',
        width: '195px',
        background: 'rgb(213, 213, 213)',
        borderRadius: '1em'
    },
    codeName: {
        // QR Code Image
    },
    radioInput: {
        // QR Code Image
    },
    buttonSend: {
        // QR Code Image
    },
}

export default Test