import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { MetricDistanceUnits, USCustomaryStandardUnits } from './UnitsToConvert';

export const DistanceConverter = (props: any) => {
    const {
        inputUSCustomaryUnits,
        setInputUSCustomaryUnits,
        inputMetricUnits,
        setInputMetricUnits,
        metricDistanceUnits,
        setmetricDistanceUnits,
        USCustomaryUnits,
        setUSCustomaryUnits
    } = props;

    const USCustomaryUnitsArray = Object.values(USCustomaryStandardUnits);
    const MetricDistanceUnitsArray = Object.values(MetricDistanceUnits);

    return (
        <>
            <Form.Row className="text-center">
                <Col className="text-center">
                    <Form.Group>
                        <Form.Label>US Customary Units</Form.Label>
                        <Form.Control as="select">
                            {USCustomaryUnitsArray.map((USCustomaryUnits, index) => (
                                <option key={index}>{USCustomaryUnits}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col className="text-center">
                    <Form.Group>
                        <Form.Label>Metric</Form.Label>
                        <Form.Control as="select">
                            {MetricDistanceUnitsArray.map((MetricDistanceUnits, index) => (
                                <option key={index}>{MetricDistanceUnits}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row className="text-center">
                <Col className="text-center">
                    <Form.Group>
                        <Form.Label>Units</Form.Label>
                        <Form.Control placeholder="0.0" value={inputUSCustomaryUnits} onChange={event => setInputUSCustomaryUnits(event.target.value)} />
                    </Form.Group>
                </Col>
                <Col className="text-center">
                    <Form.Group>
                        <Form.Label>Units</Form.Label>
                        <Form.Control placeholder="0.0" value={inputMetricUnits} onChange={event => setInputMetricUnits(event.target.value)} />
                    </Form.Group>
                </Col>
            </Form.Row>
        </>
    );
};
