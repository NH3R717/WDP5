import React, { Component } from 'react'
// import React from 'react'
import './App.css';
import Header from './Component/StaticHeader.js'
// import QRGenerator from './Component/QRGenerator.js'
import Test from './Component/Test.js'
import Footer from './Component/StaticFooter.js'

class App extends Component {
    // state = {

    // }

    render() {

        return (

            <main>
                <Header />
                <Test />
                <Footer />
            </main>

            

        )
    }
}

export default App;


