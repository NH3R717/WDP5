import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import QRGenerator from './QRGenerator.jsx';
import About from './About.jsx';
import Test from './Test.jsx';

class Routes extends Component {
    render() {
        return (
            <section>
                <Switch>
                    <Route exact path='/' component={QRGenerator} />
                    <Route exact path='/QRGenerator' component={QRGenerator} />
                    <Route exact path='/About' component={About} />
                    <Route exact path='/Test' component={Test} />
                </Switch>
            </section>
        );
    }
}

export default Routes