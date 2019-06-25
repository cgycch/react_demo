import React, { Component } from 'react';
import './App.css';
import { getUserInfos } from './ui/actions/common/user'
import BasicNavExample from './ui/components/BasicNavExample'
import moment from 'moment-timezone'
moment.locale('en-us')
moment.tz.setDefault('America/New_York')
//console.log('my real time zone is:', moment.tz.guess())
//console.log('moment defaultFormat:',moment.defaultFormat)
class App extends Component {

  componentDidMount = () => {
    //console.log('componentDidMount...')
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
        <h3>Hello {userName}, you are so handsome! time: {moment().format()}</h3>
        <BasicNavExample />
      </div>
    );
  }
}

export default App;
