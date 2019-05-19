import React from 'react'
import PropTypes from 'prop-types'
import { Button, Accordion, Card } from 'react-bootstrap';
//import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.css';
//import MyForm from './bootstrap-demo/MyForm'
import HorizontalForm from './bootstrap-demo/HorizontalForm';
export default class HelloDemo extends React.Component {
    static propTypes = {
        name: PropTypes.string,
    }

    componentDidMount = () => {
        console.log('HelloDemo componentDidMount');
    }

    render() {
        //console.log(this.props);
        const { name } = this.props.match.params
        return (
            <div>
                <div>your name is {name}</div>
                {/* <Button bsStyle='primary' bsSize='large'>Large button</Button> */}
                {/* <Button active={true} disabled={true}>disabled Button</Button> */}
                {/* <Alert key={1} variant={'success'}>success Alert</Alert> */}
                {/* <MyAccordion/> */}
{/* 
                <Alert key={2} variant={'success'}>
                    This is a {'success'} alert with{'hello'} <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
                </Alert> */}
                {/* <MyForm/> */}
                <HorizontalForm/>
            </div>
        );
    }
}
// eslint-disable-next-line
function MyAccordion() {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Click me!
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Click me!
                 </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}
