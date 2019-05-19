import React from 'react'
//import PropTypes from 'prop-types'
import { Button, Form, Col, Row } from 'react-bootstrap';
//import {FormCheck} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
export default class HorizontalForm extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            validated: false,
            email: '',
            password: '',
            select: '',
            check: ''
        };
    }

    componentDidMount = () => {
        //console.log('HelloDemo componentDidMount');
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        //console.log('###form', form)
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            this.setState({ validated: true });
        } else {
            const data = {
                email: form.email.value,
                password: form.password.value,
                select: this.state.select,
                check: this.state.check
            }
            console.log('data would be submit', data)
            //preven it commit
            event.preventDefault();
            event.stopPropagation();
        }

    }

    onSelect = (evt) => {
        const { id } = evt.target
        this.setState({ select: id })
    }

    onMyCheck = (evt) => {
        const { id, checked } = evt.target
        if (checked) {
            this.setState({ check: id })
        } else {
            this.setState({ check: '' })
        }
    }

    render() {
        const { validated } = this.state;
        return (
            <div>
                <div>this is a simple horizontal form with validation</div>
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <Form.Group as={Row} controlId="email">
                        <Form.Label column sm={2}>Email</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" required />
                            <Form.Control.Feedback type="invalid">Please input email</Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="password">
                        <Form.Label column sm={2}> Password </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" required />
                            <Form.Control.Feedback type="invalid">Please input password</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>Radios</Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    required
                                    inline
                                    type="radio"
                                    label="option 1"
                                    name="formHorizontalRadios"
                                    id="o1"
                                    onChange={this.onSelect}
                                />
                                <Form.Check
                                    required
                                    inline
                                    type="radio"
                                    label="option 2"
                                    name="formHorizontalRadios"
                                    id="o2"
                                    onChange={this.onSelect}
                                />
                                <Form.Check
                                    required
                                    inline
                                    type="radio"
                                    label="option 3"
                                    name="formHorizontalRadios"
                                    id="o3"
                                    disabled
                                    onChange={this.onSelect}
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>
                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>Check Boxs</Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    inline
                                    type="checkbox"
                                    label="option 1"
                                    name="mycheck"
                                    id="oc1"
                                    onChange={this.onMyCheck}
                                />
                                <Form.Check
                                    inline
                                    type="checkbox"
                                    label="option 2"
                                    name="mycheck2"
                                    id="oc2"
                                    onChange={this.onMyCheck}
                                />
                                <Form.Check
                                    inline
                                    type="checkbox"
                                    label="option 3"
                                    name="mycheck3"
                                    id="oc3"
                                    disabled
                                    onChange={this.onMyCheck}
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>
                    <Form.Group as={Row} controlId="formHorizontalCheck">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="Remember me" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>

            </div>
        );
    }
}