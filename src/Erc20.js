import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import logo from './logo.svg';
import './Erc20.css';

class Erc20 extends Component {
  render() {
    return (
      <div className="Erc20">
        <div className="Erc20-header">
          <img src={logo} className="Erc20-logo" alt="logo" />
          <h2>Welcome to React 2</h2>
        </div>
        <p className="Erc20-intro">
          To get started, edit <code>src/Erc20.js</code> and save to reload.
        </p>
          <Button type="button" className="btn"
          onClick={() => this.getBalance()}>Get Balance</Button>
          <input value={this.state.paymentAmount} onChange={this.updatePaymentAmount}/>
          <button type="button" className="btn" onClick={() => this.makePayment()}>Make Payment</button>

          <div>Balance "0x48884f1f259a4fdbb22b77b56bfd486fe7784304" .....
          {this.state.accountBalance}
          </div>
          <div>Balance "0x619056dd8191f6303f265bb423c37c6b043ecd9d" .....
          {this.state.customerBalance}
          </div>
      </div>
    );
  }
}

export default Erc20;
