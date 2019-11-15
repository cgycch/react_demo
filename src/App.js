import React, { Component } from 'react';
import './App.css';
import { ROLER_CONTANT } from './ui/common/contant'
import { sleep } from './ui/actions/common/utils'
import { getUserInfos } from './ui/actions/common/user'
import BasicNavExample from './ui/components/BasicNavExample'
import moment from 'moment-timezone'
moment.locale('en-us')
moment.tz.setDefault('America/New_York')
//console.log('my real time zone is:', moment.tz.guess())
//console.log('moment defaultFormat:',moment.defaultFormat)
class App extends Component {

  componentDidMount = () => {
    //console.log('App...')
    getUserInfos().then(res => {
      const { userId, userName } = res
      this.setState({ userId, userName })
    }).catch(err => {
      console.log('error on get user info', err)
    })
    this.globalContantProcess()
  }
  globalContantProcess = () => {
    //console.log('global contant process...')
    sleep(1000).then(() => {
      //console.log('do some thing after 1000')
      ROLER_CONTANT.env = 'dev'
      ROLER_CONTANT.roler = {
        'root': ['root'],
        'admin': ['admin1', 'admin2'],
        'user': ['user1', 'user2']
      }
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
