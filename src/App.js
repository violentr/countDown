import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Clock from './Clock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      deadline: "July 23, 2018",
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
        <Form inline>
        <Clock deadline={this.state.deadline} />
          <FormControl
             className="Deadline-input"
             placeholder="new date"
            onChange={event => this.setState({newDeadline: event.target.value })}
          />
          <Button onClick={()=> this.changeDeadline()}> Submit </Button>
        </Form>
      </div>
    );
  }
}

export default App;
