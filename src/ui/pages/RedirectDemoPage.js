import React, { Component } from 'react';
import moment from 'moment-timezone'
export default class RedirectDemoPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: 'redirect demo',
            curTime: moment(new Date()).format('DD-MMM-YYYY')
        }
    }

    componentDidMount = () => {
        console.log('RedirectDemoPage init .... ')
    }
    onTimeupdate = () => {
        this.setState({
            curTime: moment().format()
        })
    }

    onServiceRequest = () => {
        fetch('http://localhost:8080/mock/0612/302/request').then(resp => {
            console.log('resp', resp)
            const content_type = resp.headers.get('Content-Type')
            if (content_type.indexOf('text') !== -1) {
                console.log('Content-Type',content_type)
                return resp.text()
            }
        }).then(body => {
            console.log('body', body)
            if (body && body.indexOf('my login'));
            alert('you would be reload current page')
            window.location.reload()
        }).catch(err => {
            console.log('error', err)
        })
    }

    render() {
        return (
            <div >
                <h3>Redirect Demo Page</h3>
                <button onClick={this.onTimeupdate}>nomal request</button>
                <button onClick={this.onServiceRequest}>would be redirect request</button>
                <div>TIME:{this.state.curTime}</div>
            </div>
        )
    }
}
