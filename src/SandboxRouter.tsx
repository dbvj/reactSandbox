import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Layout } from './components/Layout';

export const SandboxRouter = () => {
    return (
        <>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Layout>
            </Router>
        </>
    );
};
