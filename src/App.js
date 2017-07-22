import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Jumbotron, Button, Image, PageHeader, Form, FormGroup, Pager, ControlLabel} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class App extends Component {

makePayment() {
  console.log('makePayment');
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React....</h2>
        </div>
<button type="button" className="btn" onClick={() => this.makePayment()} >Make Payment</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
