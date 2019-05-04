import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BaseItem from './BaseItem'
import UserListPage from '../pages/UserListPage'

class BasicExample extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/baseItem">BaseItem</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                        <li>
                            <Link to="/userList">goToUserPage</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/baseItem" component={BaseItem} />
                    <Route path="/topics" component={Topics} />
                    <Route path="/userList" component={UserListPage} />
                </div>
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
        </div>
    );
}

function Topics({ match }) {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

function Topic({ match }) {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );
}

export default BasicExample;