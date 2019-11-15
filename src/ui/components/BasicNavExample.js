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
import FoldableLabelPage from '../pages/FoldableLabelPage'
import Ztemp from '../pages/Ztemp'
//some bootstrap demo
import MyForm from './bootstrap-demo/MyForm'
import HorizontalForm from './bootstrap-demo/HorizontalForm'
import Alerts from './bootstrap-demo/Alerts'


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
                        {/* <li><Link to="/formDemo">FormDemo</Link></li> */}
                        {/* <li><Link to="/userList">goToUserPage</Link></li> */}
                        {/* <li><Link to="/helloDemo/cch/18">HelloDemo</Link></li> */}
                        {/* <li><Link to="/RedirectDemoPage/cch/18">RedirectDemoPage</Link></li> */}
                        {/* <li><Link to="/FoldableLabelPage">FoldableLabelPage</Link></li> */}
                         <li><Link to="/Ztemp">Ztemp</Link></li>
                        {/* bootstrap demo */}
                        {/* <li><Link to="/bootstrap/MyForm">bootstrap-MyForm</Link></li> */}
                        {/* <li><Link to="/bootstrap/HorizontalForm">bootstrap-HorizontalForm</Link></li> */}
                        {/* <li><Link to="/bootstrap/Alerts">bootstrap-Alerts</Link></li> */}
                    </ul>
                </div>
                <hr/>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login" component={LoginPage} />
                <Route path="/baseItem" component={BaseItem} />
                <Route path="/topics" component={Topics} />
                <Route path="/formDemo" component={FormDemo} />
                <Route path="/userList" component={UserListPage} />
                <Route path="/helloDemo/:name/:age" component={HelloDemo} />
                <Route path="/RedirectDemoPage/:name/:age" component={RedirectDemoPage} />
                <Route path="/FoldableLabelPage" component={FoldableLabelPage} />
                <Route path="/Ztemp" component={Ztemp} />
                {/* bootstrap demo list on bellow */}
                <Route path="/bootstrap/MyForm" component={MyForm} />
                <Route path="/bootstrap/HorizontalForm" component={HorizontalForm} />
                <Route path="/bootstrap/Alerts" component={Alerts} />
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
