import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { DistanceConverter } from './Distances';
import { UnitsToConvert, MetricDistanceUnits, USCustomaryStandardUnits } from './UnitsToConvert';

export const UnitConverter = () => {
    const [unitsToConvert, setUnitsToConvert] = useState(UnitsToConvert.DISTANCE);
    const [metricDistanceUnits, setMetricDistanceUnits] = useState(MetricDistanceUnits.METERS);
    const [USCustomaryUnits, setUSCustomaryUnits] = useState(USCustomaryStandardUnits.YARDS);
    const [inputUSCustomaryUnits, setInputUSCustomaryUnits] = useState(0);
    const [inputMetricUnits, setInputMetricUnits] = useState(0);

    const unitsToConvertArray = Object.values(UnitsToConvert);

    return (
        <Container className="App">
            <Row className="text-center">
                <Col className="text-center">
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Select Units To Convert</Form.Label>
                            <Form.Control as="select">
                                {unitsToConvertArray.map((unitToConvert, index) => (
                                    <option key={index}>{unitToConvert}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <DistanceConverter
                inputUSCustomaryUnits={inputUSCustomaryUnits}
                setInputUSCustomaryUnits={setInputUSCustomaryUnits}
                inputMetricUnits={inputMetricUnits}
                setInputMetricUnits={setInputMetricUnits}
                metricDistanceUnits={metricDistanceUnits}
                setMetricDistanceUnits={setMetricDistanceUnits}
                USCustomaryUnits={USCustomaryUnits}
                setUSCustomaryUnits={setUSCustomaryUnits}
            />
            <Row className="text-center">
                <Col className="text-center">{/* input value */}</Col>
                <Col className="text-center">{/* output value */}</Col>
            </Row>
        </Container>
    );
};
