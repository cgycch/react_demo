import React, { Component } from 'react';
import './App.css';
import BasicNavExample from './ui/components/BasicNavExample'
class App extends Component {
  render() {
    return (
      <div className="App">
         <h3>Hello chunhui, you are so handsome!</h3>
         <BasicNavExample/>
      </div>
    );
  }
}

export default App;
