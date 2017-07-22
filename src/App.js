import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Jumbotron, Button, Image, PageHeader, Form, FormGroup, Pager, ControlLabel} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class App extends Component {

constructor(props) {
    super(props);
    this.state = {val: 0, UserMessage:'hello' }

this.makePayment = this.makePayment.bind(this)
this.displayStatus = this.displayStatus.bind(this)

}

makePayment() {
  console.log('makePayment');
}
displayStatus() {
  console.log("displayStatus");
  this.setState({UserMessage: "new message"});
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React....</h2>
        </div>
<button type="button" className="btn" onClick={() => this.displayStatus()} > Display Status </button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
	<div>
Message: {this.state.UserMessage}

        </div>
      </div>
    );
  }
}

export default App;
