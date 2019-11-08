import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import FoldableLabel from '../components/FoldableLabel'
export default class FoldableLabelPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    render() {
        let content = "this is a hello message, this is a hello message, this is a hello message "
        let content2 = "hello world"
        return (
            <Container style={{ width: '100%' }}>
                <Row>
                    <Col xs={12} md={2}>
                        <label>column A</label>
                    </Col>
                    <Col xs={12} md={2}>
                        <FoldableLabel labelId='id123' labelClass='class123' content={content} />
                    </Col>
                    <Col xs={12} md={2}>
                        <label>column B</label>
                    </Col>
                    <Col xs={12} md={2}>
                        <FoldableLabel content={content} />
                    </Col>
                    <Col xs={12} md={2}>
                        <label>column C</label>
                    </Col>
                    <Col xs={12} md={2}>
                        <FoldableLabel content={content} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={2}>
                        <label>column A</label>
                    </Col>
                    <Col xs={12} md={2}>
                        <FoldableLabel content={content} />
                    </Col>
                    <Col xs={12} md={2}>
                        <label>column B</label>
                    </Col>
                    <Col xs={12} md={2}>
                        <FoldableLabel content={content} />
                    </Col>
                    <Col xs={12} md={2}>
                        <label>column C</label>
                    </Col>
                    <Col xs={12} md={2}>
                        <FoldableLabel content={content} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={2}>
                        <label>column A</label>
                    </Col>
                    <Col xs={12} md={2}>
                        <FoldableLabel content={content2} />
                    </Col>
                    <Col xs={12} md={2}>
                        <label>column B</label>
                    </Col>
                    <Col xs={12} md={2}>
                        <FoldableLabel content={content2} />
                    </Col>
                    <Col xs={12} md={2}>
                        <label>column C</label>
                    </Col>
                    <Col xs={12} md={2}>
                        <FoldableLabel content={content2} />
                    </Col>
                </Row>               
            </Container>

        )
    }
}

