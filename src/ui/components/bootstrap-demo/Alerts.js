import React from 'react'
import { Alert, Button } from 'react-bootstrap';
export default class Alerts extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = { show: true };
    }

    componentDidMount = () => {
        //console.log('MyForm componentDidMount');
    }

    render() {
        const alters = [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ].map((variant, idx) => (
            <Alert key={idx} variant={variant}>
                This is a {variant} alert—check it out!
            </Alert>
        ));
        const handleHide = () => this.setState({ show: false });
        const handleShow = () => this.setState({ show: true });
        let errAllerts
        if (this.state.show) {
            errAllerts = <Alert variant="danger" onClose={handleHide} dismissible>
                <Alert.Heading>Oh god! You got an error!</Alert.Heading>
                <p>this is a error message content.</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={handleHide} variant="outline-primary">
                    Close me ya'll!
                    </Button>
                </div>
              </Alert>
          }else{
              //nothing to do
          }
        return (
            <div>
                <div>this is a simple Alerts demo</div>
                {alters}
                <Button onClick={handleShow} variant='primary'>show</Button>
                {
                   errAllerts
                }
            </div>
        );
    }
}