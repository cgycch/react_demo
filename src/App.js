import React, { Component } from 'react';
import './App.css';
import { getUserInfos } from './ui/actions/common/user'
import BasicNavExample from './ui/components/BasicNavExample'
class App extends Component {
  constructor(props) {
    super(props)
    this.setState({
      userId: '00001',
      userName: 'admin'
    })
  }
  componentDidMount = () => {
    console.log('componentDidMount...')
    getUserInfos().then(res => {
      const { userId, userName } = res
      this.setState({ userId, userName })
    }).catch(err => {
      console.log('error on get user info', err)
    })
  }

  render() {
    let userName = 'xxx'
    if (this.state != null) {
      userName = this.state.userName
    }
    return (
      <div className="App">
        <h3>Hello {userName}, you are so handsome!</h3>
        <BasicNavExample />
      </div>
    );
  }
}

export default App;
