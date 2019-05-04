import React, { Component } from 'react';
import { list, load } from '../actions/restActions'
class BaseItem extends Component {

  componentDidMount = () => {
    //console.log('did mounted');
  }
  onClick = () => {
    console.log('hello button click');
    list();
    let user = load('val1', 'val2');
    console.log('### user', user);
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