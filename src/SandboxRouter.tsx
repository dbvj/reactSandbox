import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Layout } from './components/Layout';
import { UnitConverter } from './components/unit_converter/index';

export const SandboxRouter = () => {
    return (
        <>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/unit-converter" component={UnitConverter} />
                    </Switch>
                </Layout>
            </Router>
        </>
    );
};
