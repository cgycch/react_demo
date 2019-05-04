import React, { Component } from 'react';
import './App.css';
import BasicNavExample from './ui/components/BasicNavExample'
class App extends Component {
  render() {
    return (
      <div className="App">
         <h3>hello App</h3>
         <BasicNavExample/>
      </div>
    );
  }
}

export default App;
