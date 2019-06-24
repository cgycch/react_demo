import React, { Component } from 'react';
import moment from 'moment-timezone'
export default class RedirectDemoPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            key: 'redirect demo',
            isProcessing: false,
            count: 0,
            curTime: moment(new Date()).format('DD-MMM-YYYY')
        }
    }

    componentDidMount = () => {
        console.log('RedirectDemoPage init .... ')
    }
    onTimeupdate = () => {
        const { isProcessing, count } = this.state
        if (isProcessing) {
            console.log('Please wait for the last request to be completed.')
            return;
        }
        this.setState({ isProcessing: !isProcessing })
        console.log('mock start this request...', count)
        setTimeout(() => {
            this.setState({
                curTime: moment().format(),
                count: count + 1,
                isProcessing: false
            })
            console.log('mock finished this request...', count)
        }, 1000)

    }

    onServiceRequest = () => {
        fetch('http://localhost:8080/mock/0612/302/request').then(resp => {
            console.log('resp', resp)
            const content_type = resp.headers.get('Content-Type')
            alert('you would be reload current page', content_type)
            if (content_type.indexOf('text') !== -1) {
                console.log('Content-Type', content_type)
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
                <button onClick={this.onTimeupdate} disabled ={this.state.isProcessing}>nomal request</button>
                <button onClick={this.onServiceRequest}>would be redirect request</button>
                <div>TIME:{this.state.curTime}</div>
                <div>nomal request count:{this.state.count}</div>
            </div>
        )
    }
}
