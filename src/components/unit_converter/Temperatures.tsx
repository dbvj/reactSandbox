import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

export const TemperatureConverter = () => {
    return (
        <>
            <Form.Row className="text-center">
                <Col className="text-center">
                    <Form.Group>
                        <Form.Label>US Customary Units</Form.Label>
                        <Form.Control as="select" custom>
                            <option>Ferenheit</option>
                            <option>Celcius</option>
                            <option>Yards</option>
                            <option>Miles</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col className="text-center">
                    <Form.Group>
                        <Form.Label>Metric</Form.Label>
                        <Form.Control as="select" custom>
                            <option>Milimeters</option>
                            <option>Centimeters</option>
                            <option>Meters</option>
                            <option>Kilometers</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row className="text-center">
                <Col className="text-center">
                    <Form.Group>
                        <Form.Label>Units</Form.Label>
                        <Form.Control placeholder="0.0"></Form.Control>
                    </Form.Group>
                </Col>
                <Col className="text-center">
                    <Form.Group>
                        <Form.Label>Units</Form.Label>
                        <Form.Control placeholder="0.0"></Form.Control>
                    </Form.Group>
                </Col>
            </Form.Row>
        </>
    );
};
