import React, { Component } from 'react'
import React from 'react'

import Header from './StaticHeader.js'
import QRGenerator from './QRGenerator.js'
import QRGenerator from './StaticFooter.js'

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


