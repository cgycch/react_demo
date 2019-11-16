import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from "react-router-dom";
import LinkBtn from '../components/LinkBtn'
import { CONTANT_ROLER, CONTANT_EXCEPTION } from '../common/contant'
import { sleep } from '../actions/common/utils'


export default class Ztemp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: 'value',
            roler: {},
            curUser: 'user2',
            showMenu: false,
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
        const { roler, curUser, showMenu } = this.state
        let className = classnames({
            'placeholder': curUser === 'user2'
        })
        const menuClass = classnames({
            'cch-overfloat-show': showMenu,
            'cch-overfloat-hide': !showMenu,
        })
        return (
            <div >
                <h3>Hello Ztemp Demo</h3>
                <button onClick={() => { window.history.back() }}>go back</button>
                <Link to="/" target='_self'>go home</Link><br />
                <button className={'hello-btn'}><Link to="/helloDemo/cch/18" className={'hello'}>go to hello</Link></button><br />
                <Link to="/Ztemp" target='_blank'>go new Ztemp</Link><br />

                <LinkBtn to={'/helloDemo/cch/18'}>Close</LinkBtn>
                <div onClick={() => this.setState({ showMenu: !showMenu })} >show self menu</div>
                <div className={menuClass}>
                    <div className={'cch-btnLink'}>
                        <Link className={'cch-btnLink'} to={'/Ztemp'}>self link 1</Link>
                    </div>
                    <div className={'cch-btnLink'}>
                        <Link className={'cch-btnLink'} to={'/Ztemp'}>self link 2</Link>
                    </div>
                    <div className={'cch-btnLink'}>
                        <Link className={'cch-btnLink'} to={'/Ztemp'}>self link 3</Link>
                    </div>
                    <div className={'cch-btnLink'}>
                        <Link className={'cch-btnLink'} to={'/Ztemp'}>self link 4</Link>
                    </div>
                </div>

                <button onClick={() => { window.location.href = '/helloDemo/cch/18' }}>href hello</button>
                <button onClick={() => { window.open('/helloDemo/cch/18', '_self') }}>open hello</button>

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
