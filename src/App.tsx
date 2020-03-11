import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AppLogo } from './components/AppLogo';

class App extends React.Component {
    state = {
        message: 'Loading...',
        isLogo: true
    };

    componentDidMount() {
        setTimeout(() => this.setState({ message: 'Learn React' }), 3000);
    }

    removeComponent() {
        this.setState({ isLogo: false });
    }

    renderLogoThing() {
        if (this.state.isLogo) {
            return <AppLogo logoAlt="logo" isLogo={this.state.isLogo} />;
        }

        return null;
    }

    render() {
        return (
            <Container className="App">
                <Row className="App-header">
                    ``
                    <Col>{this.renderLogoThing()}</Col>
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
