import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AppLogo } from './AppLogo';

enum HomePageStatus {
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS'
}

export const Home = () => {
    const [pageStatus, setPageStatus] = useState(HomePageStatus.LOADING);
    const [fakeStateItem, setFakeStateItem] = useState(true);

    useEffect(() => {
        setPageStatus(HomePageStatus.LOADING);
        setTimeout(() => setPageStatus(HomePageStatus.SUCCESS), 3000);
    }, [fakeStateItem]);

    const renderLogoThing = () => {
        return <AppLogo logoAlt="logo" />;
    };

    return (
        <Container className="App">
            <Row className="App-header">
                <Col className="text-center">{renderLogoThing()}</Col>
            </Row>
            <Row className="text-center">
                <Col className="text-center">
                    <p>
                        Edit <code onClick={() => setFakeStateItem(!fakeStateItem)}>src/App.tsx</code> and save to reload.
                    </p>
                </Col>
            </Row>
            <Row className="text-center">
                <Col className="text-center">
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        {pageStatus === HomePageStatus.LOADING ? 'Loading Page...' : 'I am done now.'}
                    </a>
                </Col>
            </Row>
        </Container>
    );
};
