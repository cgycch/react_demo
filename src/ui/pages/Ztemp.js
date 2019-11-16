import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from "react-router-dom";
import { ROLER_CONTANT } from '../common/contant'
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
        if (ROLER_CONTANT.roler) {
            console.log('use cache roler...')
            this.setState({ roler: ROLER_CONTANT.roler })
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
                <button onClick={() => {window.history.back()}}>go back</button><br />
                <select className={className} defaultValue={curUser}>
                    {roler.user && roler.user.map(user => {
                        return <option key={user} value={user}>{user}</option>
                    })}
                </select>
            </div>
        )
    }
}
