import React, { Component } from 'react';
import ContractApi from './../../ContractApi';

class ClientPositions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientContracts: []
    };
  }

  componentDidMount() {

    ContractApi.getClientContracts().then((result) => {
      console.log('CLIENT CONTRACTS = ' + JSON.stringify(result));
    }).catch((error) => {
      console.log('error ' + error);
    })
  }

  render() {
    console.log(JSON.stringify(this.state.investorData));
    console.log(this.state.macbookQuotes);
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <span className="h1" style={{ color: "#3b5998" }}>Dashboard</span>
          </div>
          <div className="col-md-4">
            <div className="h4" style={{ textAlign: "right" }}>Syndicate Total Balance</div>
            <div className="h4" style={{ textAlign: "right" }}>Syndicate Escrow Balance</div>
            <div className="h4" style={{ textAlign: "right" }}>Syndicate Liquid Balance</div>
            <div className="h4" style={{ textAlign: "right" }}>Your Balance</div>
          </div>
          <div className="col-md-4">

          </div>
        </div>
        <hr />
       
      </div>
    );
  }
}

export default ClientPositions;
