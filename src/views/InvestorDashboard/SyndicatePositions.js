import React from 'react';
import contractApi from './../../ContractApi';

class SyndicatePositions extends React.Component {

  constructor(){
    super();
    this.state = {positions: {}};
  }

  componentWillMount(){

    contractApi.getAllInsuranceContracts()
    .then((result) =>{
      console.log(result);

      let data = [];
      var accounts = result.accounts;
      var premiums = result.premiums;
      var payouts = result.payouts;
      var startBlocks = result.startBlocks;
      var endBlocks = result.endBlocks;

      for (var i = 0; i < accounts.length; i++) {
        data.push({
          account: accounts[i],
          premium: premiums[i].c[0],
          payouts: payouts[i].c[0],
          startBlocks: startBlocks[i].c[0],
          endBlocks: endBlocks[i].c[0],
        })
        }
      this.setState({
        positions : data
      });
    }

  );
  }
  render(){
    if(Object.keys(this.state.positions).length === 0 ){
      return (
        <div >
          Loading positions...
        </div>
      );
    }
      else{
        return(
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
                      <tr>
                        <th>Account </th>
                        <th>Premium </th>
                        <th>Payouts </th>
                        <th>Start Block </th>
                        <th>End Block </th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.positions.map((val) =>
                      <tr key={val.startBlocks}>
                          <td key={val.account}> {val.account}
                          </td>
                          <td key={val.premium}> {val.premium}
                          </td>
                          <td key={val.payouts}> {val.payouts}
                          </td>
                          <td key={val.endBlocks}> {val.endBlocks}
                          </td>
                          <td key={val.startBlocks}> {val.startBlocks}
                          </td>
                              <td>
                              <span className="badge badge-success">Active</span>
                            </td>
                       </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
    }
  }
}
export default SyndicatePositions;
