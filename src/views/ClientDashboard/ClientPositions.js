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
    console.log('getting client contracts');
    ContractApi.getClientContracts().then((result) => {
      console.log('CLIENT CONTRACTS = ' + JSON.stringify(result));
      this.setState({
        clientContracts: result
      })
    }).catch((error) => {
      console.log('error ' + error);
    })
  }

  render() {
    console.log(JSON.stringify(this.state.investorData));
    console.log(this.state.macbookQuotes);
    return (
      <div className="animated fadeIn">
        <div className="row">
           <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> Positions
              </div>
              <div className="card-block">
                <table className="table">
                  <thead>
                    <th>Premium</th>
                    <th>Payout</th>
                    <th>Start Block</th>
                    <th>End Block</th>
                  </thead>
                  <tbody>
                    {this.state.clientContracts.map((contract, id) =>
                        <tr key={id}>
                          <td>{contract.premium}</td>
                          <td>{contract.payout}</td>
                          <td>{contract.startBlock}</td>
                          <td>{contract.endBlock}</td>
                        </tr>
                    )}
                  </tbody>
                </table>
              <hr />
            </div>
            </div>
            </div>
            </div>
      </div>
    );
  }
}

export default ClientPositions;
