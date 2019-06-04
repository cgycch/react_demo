import React from 'react'
import PropTypes from 'prop-types'
import { Button, Accordion, Card } from 'react-bootstrap';
import { testRedirect, testRequest, testRequestWithCookie, testRedirectToNewUrl } from '../actions/demo'
//import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.css';
//import MyForm from './bootstrap-demo/MyForm'
//import HorizontalForm from './bootstrap-demo/HorizontalForm';
export default class HelloDemo extends React.Component {
    static propTypes = {
        name: PropTypes.string,
    }

    componentDidMount = () => {
        console.log('HelloDemo componentDidMount');
    }

    handleRedirect = () => {
        console.log('handleRedirect...')
        testRedirect().then(res => {
            console.log('testRedirect res', res)
        }).catch(err => {
            console.log('testRedirect err', err)
        })
    }

    handleRequest = () => {
        console.log('handleRequest...')
        testRequest().then(res => {
            console.log('handleRequest res', res)
        }).catch(err => {
            console.log('handleRequest err', err)
        })
    }

    handleRequest2 = () => {
        console.log('handleRequest2...')
        testRequestWithCookie().then(res => {
            console.log('handleRequest2 res', res)
        }).catch(err => {
            console.log('handleRequest2 err', err)
        })
    }
    
    handleRedirectToNewUrl = () => {
        console.log('handleRequest...')
        testRedirectToNewUrl().then(res => {
            console.log('handleRequest res', res)
        }).catch(err => {
            console.log('handleRequest err', err)
        })
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
                {/* <HorizontalForm/> */}
                <button onClick={this.handleRequest}> test request</button>
                <button onClick={this.handleRequest2}> test request with cookie</button>
                <button onClick={this.handleRedirect}> test redirect</button>
                <button onClick={this.handleRedirectToNewUrl}> test redirect to new url</button>
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
