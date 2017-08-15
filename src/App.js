import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title"> Count down to July 23, 2017 </div>
        <div>
          <div className="Clock-days"> 23 days </div>
          <div className="Clock-hours"> 13 hours </div>
          <div className="Clock-minutes"> 33 minutes </div>
          <div className="Clock-seconds"> 23 seconds </div>
        </div>
        <div>
          <input placeholder="new date"/>
          <button> Submit </button>
        </div>
      </div>
    );
  }
}

export default App;
