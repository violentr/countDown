import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      deadline: "July 23, 2017",
      newDeadline: ""
    }
  }
  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }
  render() {
    return (
      <div className="App">
        <div className="App-title"> Count down to {this.state.deadline} </div>
        <div>
          <div className="Clock-days"> 23 days </div>
          <div className="Clock-hours"> 13 hours </div>
          <div className="Clock-minutes"> 33 minutes </div>
          <div className="Clock-seconds"> 23 seconds </div>
        </div>
        <div>
          <input
             placeholder="new date"
            onChange={event => this.setState({newDeadline: event.target.value })}
          />
          <button onClick={()=> this.changeDeadline()}> Submit </button>
        </div>
      </div>
    );
  }
}

export default App;
