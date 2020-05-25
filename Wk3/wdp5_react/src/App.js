import React, { Component } from 'react'
import './App.css';
import Routes from './Component/Routes.js';
import { BrowserRouter as Router } from 'react-router-dom'
// import { BrowserRouter as Router} from 'react-router-dom'
import Header from './Component/StaticHeader.js'
// import QRGenerator from './Component/QRGenerator.js'
// import Test from './Component/Test.js'
import Footer from './Component/StaticFooter.js'

class App extends Component {

    render() {

        return (

            <main>
                <Router>
                    <Header />
                    <Routes />
                    <Footer />
                </Router>
            </main>

        )
    }
}

export default App;


