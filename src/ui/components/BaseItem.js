import React, { Component } from 'react';
import { add } from '../actions/restActions'
import { myFetch, myFetch2, myFetch3} from '../actions/baseAction'
class BaseItem extends Component {

  componentDidMount = () => {
    //console.log('did mounted');
  }

  onClick = () => {
    this.testLoad();
  }

  onClick1 = () => {
    this.testLoadErr();
  }
  
  onClick2 = () => {
    this.testNotExist();
  }

  successProcess = (result) => {
    console.log('result', result);
  }

  failedProcess = (e) => {
    console.log('error', e);
  }
  /**
   * test load
   */
  testLoad() {
    console.log('test load');
    myFetch('params input').then(res => {
      console.log('the result is', res)
    })
  }

  /**
   * test load
   */
  testLoadErr() {
    console.log('test load Err');
    myFetch2('params input').then(res => {
      console.log('the result is', res)
    })
  }

  /**
   * test load
   */
  testNotExist() {
    console.log('test load Err');
    myFetch3('params input').then(res => {
      console.log('the result is', res)
    })
  }

  /**
   * test add user
   */
  testAdd() {
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
    };
    add(user, this.successProcess, this.failedProcess);
  }

  render() {
    return (
      <div>
        <h3>Hello BaseItem</h3>
        <button onClick={this.onClick}>click me</button>
        <button onClick={this.onClick1}>click err</button>
        <button onClick={this.onClick2}>click not exist</button>
      </div>
    );
  }
}

export default BaseItem;