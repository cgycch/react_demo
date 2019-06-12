import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//some demo component
import BaseItem from './BaseItem'
import FormDemo from './FormDemo'
import PropType from './PropType'
import Topics from './Topics'
import HelloDemo from './HelloDemo'
//some demo page
import LoginPage from '../pages/LoginPage'
import UserListPage from '../pages/UserListPage'
import RedirectDemoPage from '../pages/RedirectDemoPage'


class BasicNavExample extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {/* test on date 2019-05-17 */}
                        {/* <li><Link to="/about">About</Link></li> */}
                        {/* <li><Link to="/login">Login</Link></li> */}
                        {/* <li><Link to="/baseItem">BaseItem</Link></li> */}
                        {/* <li><Link to="/topics">Topics</Link></li> */}
                        {/* <li><Link to="/componentsDemo">Base Component demo</Link></li> */}
                        {/* <li><Link to="/userList">goToUserPage</Link></li> */}
                        {/* <li><Link to="/helloDemo/cch/18">HelloDemo</Link></li> */}
                         <li><Link to="/RedirectDemoPage/cch/18">RedirectDemoPage</Link></li>
                    </ul>
                </div>
                <hr/>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login" component={LoginPage} />
                <Route path="/baseItem" component={BaseItem} />
                <Route path="/topics" component={Topics} />
                <Route path="/componentsDemo" component={FormDemo} />
                <Route path="/userList" component={UserListPage} />
                <Route path="/helloDemo/:name/:age" component={HelloDemo} />
                <Route path="/RedirectDemoPage/:name/:age" component={RedirectDemoPage} />
            </Router>
        );
    }
}

function Home() {
    return (
        <div>
            <h2>Hello Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>Hello About</h2>
            <PropType name={'hello'} age={1} sex={'男'} features={{ 'weight': 11, 'height': 33 }} salary={99999} />
        </div>
    );
}

export default BasicNavExample;
