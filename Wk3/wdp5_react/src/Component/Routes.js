import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import QRGenerator from '../Component/QRGenerator';
import About from '../Component/About';
import Test from '../Component/Test';

class Routes extends Component {
    render() {
        return (
            <section>
                <Switch>
                    <Route exact path='/' component={Test} />
                    <Route exact path='/QRGenerator' component={QRGenerator} />
                    <Route exact path='/About' component={About} />
                    <Route exact path='/Test' component={Test} />
                </Switch>
            </section>
        );
    }
}

export default Routes