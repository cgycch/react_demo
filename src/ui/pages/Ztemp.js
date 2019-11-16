import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from "react-router-dom";
import { CONTANT_ROLER, CONTANT_EXCEPTION } from '../common/contant'
import { sleep } from '../actions/common/utils'


export default class Ztemp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: 'value',
            roler: {},
            curUser: 'user2'
        }
    }
    componentDidMount = () => {
        this.initRoler()
    }

    initRoler = () => {
        if (CONTANT_ROLER.roler) {
            console.log('use cache roler...')
            this.setState({ roler: CONTANT_ROLER.roler })
        } else {
            sleep(1000).then(() => {
                console.log('init roler...')
                this.setState({ roler: { 'user': ['user1', 'user2', 'user3'] } })
            })
        }
    }

    render() {
        const { roler, curUser } = this.state
        let className = classnames({
            'placeholder': curUser === 'user2',
            'red': true
        });
        return (
            <div >
                <h3>Hello Ztemp Demo</h3>
                <Link to="/Ztemp" target='blank'>new Ztemp</Link><br />

                <button onClick={() => { window.history.back() }}>go back</button>
                <button onClick={() => { console.log('roler', { CONTANT_ROLER }) }}>console CONTANT_ROLER</button>
                <button onClick={() => { console.log('exception', { CONTANT_EXCEPTION }) }}>console CONTANT_EXCEPTION</button>
                <br />

                <select className={className} defaultValue={curUser}>
                    {roler.user && roler.user.map(user => {
                        return <option key={user} value={user}>{user}</option>
                    })}
                </select>
            </div>
        )
    }
}
