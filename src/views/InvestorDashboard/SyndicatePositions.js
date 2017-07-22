import React from 'react';
import ContractApi from './../../ContractApi';
import { init }  from './../../ContractApi';

class SyndicatePositions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        investorData: {}
    };
  }

  componentDidMount() {
    ContractApi.getInvestorOverview().then((result) => {
      this.setState({
        investorData: result
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    console.log(JSON.stringify(this.state.investorData));
      return (
        <div>
            <div className="row">
            <div className="col-md-6">
            <span className="h1 facebook">Dashboard</span>
                </div>
                <div className="col-md-3">
                 <span className="h3" style={{textAlign:"right"}}>Syndicate Balance</span><br />
                 <span className="h3" style={{textAlign:"right"}}>Escrow Balance</span><br />
                 <span className="h3" style={{textAlign:"right"}}>Your Liquid Balance</span><br />     
                 <span className="h3" style={{textAlign:"right"}}>Your Escrow Balance</span><br />
                    </div>
                    <div className="col-md-3">
                 <span className="h3" style={{textAlign:"left"}}>{this.state.investorData.totalSupply}</span><br />
                 <span className="h3" style={{textAlign:"left"}}>{this.state.investorData.escrowBalance}</span><br />
                 <span className="h3" style={{textAlign:"left"}}>{this.state.investorData.userBalance}</span><br />
                 <span className="h3" style={{textAlign:"left"}}>{this.state.investorData.userEscrowBalance}</span><br />
                        </div>
                </div>

        </div>    
      );
  }
}
export default SyndicatePositions;
