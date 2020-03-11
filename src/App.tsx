import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AppLogo } from './components/AppLogo';
import { runInThisContext } from 'vm';

class App extends React.Component {
    state = {
        message: 'Loading...'
    };

    componentDidMount() {
        setTimeout(() => this.setState({ message: 'Learn React' }), 3000);
    }

    renderLogoThing = () => {
        return <AppLogo logoAlt="logo" />;
    };

    render() {
        return (
            <Container className="App">
                <Row className="App-header">
                    <Col className="text-center">{this.renderLogoThing()}</Col>
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
                            {this.state.message}
                        </a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
