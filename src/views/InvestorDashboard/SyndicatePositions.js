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
        return (
          <div>
            <h2 className="h2" >Investor Positions</h2>
          <div className="table-responsive">
            <table className="table" >
              <thead>
               <tr>
                  <th>Account </th>
                  <th>Premium </th>
                  <th>Payouts </th>
                  <th>Start Block </th>
                </tr>
              </thead>
              <tbody>

                {this.state.positions.map((val) =>
                <tr key={val.account}>
                    <td key={val.account}> {val.account}
                    </td>
                    <td key={val.premium}> {val.premium}
                    </td>
                    <td key={val.payouts}> {val.payouts}
                    </td>
                    <td key={val.startBlocks}> {val.startBlocks}
                    </td>
                </tr>
                )}
              </tbody>
            </table>
          </div>
          </div>
        );
    }
  }
}
export default SyndicatePositions;
