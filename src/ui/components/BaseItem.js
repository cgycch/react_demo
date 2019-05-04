import React, { Component } from 'react';
import { add } from '../actions/restActions'
class BaseItem extends Component {

  componentDidMount = () => {
    //console.log('did mounted');
  }

  onClick = () => {
    console.log('hello button click')
    // let user = new FormData()
    // user.append('userId','9998')
    // user.append('userName','xiaohuihui')
    // user.append('phone','1806098888')
    // user.append('address','hangzhou')
    // user.append('birthday','2019-05-04T10:05:48.429Z')
    let user = {
      "address": "fujian",
      "birthday": "2019-05-04T10:05:48.429Z",
      "phone": 18812345678,
      "userId": "9998",
      "userName": "xiaohuihui"
    }
    add(user,this.successProcess, this.failedProcess)
    console.log('test end')
  }
  successProcess = (result) => {
    console.log('result', result);
  }
  failedProcess = (e) => {
    console.log('error', e);
  }

  render() {
    return (
      <div>
        <h3>Hello BaseItem</h3>
        <button onClick={this.onClick}>click me</button>
      </div>
    );
  }
}

export default BaseItem;