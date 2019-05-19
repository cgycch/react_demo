import React from 'react'
//import PropTypes from 'prop-types'
import { Button, Form, InputGroup, Col, Row } from 'react-bootstrap';
//import {FormCheck} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
export default class HelloDemo extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            validated: false,
            firstName: '',
            lastName: '',
            userName: '',
            city: '',
            state: '',
            zip: '',
            hobby: '',
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
                firstName: form.firstName.value,
                lastName: form.lastName.value,
                userName: form.userName.value,
                city: form.city.value,
                state: form.state.value,
                zip: form.zip.value,
                hobby: this.state.hobby,
            }
            console.log('data would be submit', data)
            //preven it commit
            event.preventDefault();
            event.stopPropagation();
        }
    }
    onHobbySelect = (evt) => {
        console.log('id:', evt.target.id)
        const { id } = evt.target
        this.setState({ hobby: id })
    }

    render() {
        const { validated } = this.state;
        return (
            <div>
                <div>this is a simple form with validation</div>
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="firstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="huihui"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="lastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue="chen"
                            />
                            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please input a last name</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="userName">
                            <Form.Label>Username</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                />
                                <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="zip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <fieldset>
                        <Form.Group as={Row} md="12">
                            <Form.Label column sm={1}>Hobby</Form.Label>
                            <Col sm={4}>
                                <Form.Check
                                    inline
                                    custom
                                    required
                                    type="radio"
                                    label="reading"
                                    name="hobby"
                                    id="read"
                                    onChange={this.onHobbySelect}
                                />
                                <Form.Check
                                    inline
                                    custom
                                    required
                                    type="radio"
                                    label="running"
                                    name="hobby"
                                    id="run"
                                    onChange={this.onHobbySelect}
                                />
                                <Form.Check
                                    inline
                                    custom
                                    required
                                    disabled
                                    type="radio"
                                    label="sleeping"
                                    name="hobby"
                                    id="sleep"
                                />
                            </Col>
                            <Form.Control.Feedback type="invalid">Yo this is required</Form.Control.Feedback>
                        </Form.Group>
                    </fieldset>
                    {/* <Form.Group>
                        <Form.Check
                            required
                            type={'checkbox'}
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                        />
                        <FormCheck>
                            <FormCheck.Input type={'checkbox'} required />
                            <FormCheck.Label>Allow us to contact you?</FormCheck.Label>
                            <Form.Control.Feedback type="valid">hei hei</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Yo this is required</Form.Control.Feedback>
                        </FormCheck>
                    </Form.Group> */}
                    <Button type="submit">Submit form</Button>
                </Form>
            </div>
        );
    }
}