import React, { Component } from 'react';
import { myLogin } from '../actions/baseAction'
import LoginDemo from '../components/LoginDemo';
class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.setState({})
    }

  testLogin(){
    console.log('test login');
    let user = {
        "username": "cch",
        "password": "123456"
      };
    myLogin(user).then(res => {
      console.log('the result is', res)
    })
  }

    render() {
        return (
            <div >
                <h3>Hello User Login Page</h3>
                <div>
                    <button onClick={this.testLogin}>login</button>
                    <LoginDemo></LoginDemo>
                </div>
            </div>
        );
    }
}

export default LoginPage;