import React, { Component } from 'react'
import './App.css';
import Routes from './Component/Routes.jsx';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
// import { BrowserRouter as Router} from 'react-router-dom'
import Header from './Component/StaticHeader.jsx'
// import QRGenerator from './Component/QRGenerator.js'
// import Test from './Component/Test.js'
import Footer from './Component/StaticFooter.jsx'

class App extends Component {

    render() {

        return (

            <main>
                <Router>
                    <Header />
                    <Routes />
                    <Footer style={styles.footer} />
                </Router>
            </main>

        )
    }
}

export default App;

const styles = {
    footer: {
        color: 'green',
        position: 'absolute',
        bottom: '0',
        height: '16em',
        padding: '0 0 2em 0'
    }
}

