import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AppLogo } from './AppLogo';

export const Home = () => {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        setTimeout(() => setMessage('Learn React'), 3000);
    }, []);

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
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                </Col>
            </Row>
            <Row className="text-center">
                <Col className="text-center">
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        {message}
                    </a>
                </Col>
            </Row>
        </Container>
    );
};
