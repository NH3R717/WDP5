/* 
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Web Design Portfolio 5 (WDPV)
   */

import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import QRGenerator from '../Component/QRGenerator';
import About from '../Component/About';
import Test from '../Component/Test';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={QRGenerator} />
                    <Route exact path='/QRGenerator' component={QRGenerator} />
                    <Route exact path='/About' component={About} />
                    <Route exact path='/Test' component={Test} />
                </Switch>
            </Router>
        );
    }
}

export default Routes