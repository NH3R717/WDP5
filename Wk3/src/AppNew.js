import React, { Component } from 'react'
import React from 'react'

import Header from '.Components/StaticHeader.js'
import QRGenerator from '.Components/QRGenerator.js'
import Footer from '.Components/StaticFooter.js'

class Generator extends Component {
    state = {

    }

    render() {

        return (

            <main>
                <Header />
                <QRGenerator />
                <Footer />
            </main>

        )
    }
}


