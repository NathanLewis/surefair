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
            <div className="col-md-4">
            <span className="h1" style={{color:"#3b5998"}}>Dashboard</span>
                </div>
                <div className="col-md-4">
                 <div className="h3" style={{textAlign:"right"}}>Syndicate Balance</div>
                 <div className="h3" style={{textAlign:"right"}}>Escrow Balance</div>
                 <div className="h3" style={{textAlign:"right"}}>Your Liquid Balance</div>   
                 <div className="h3" style={{textAlign:"right"}}>Your Escrow Balance</div>
                    </div>
                    <div className="col-md-4">
                 <div className="h3" style={{textAlign:"left"}}>{this.state.investorData.totalSupply}</div>
                 <div className="h3" style={{textAlign:"left"}}>{this.state.investorData.escrowBalance}</div>
                 <div className="h3" style={{textAlign:"left"}}>{this.state.investorData.userBalance}</div>
                 <div className="h3" style={{textAlign:"left"}}>{this.state.investorData.userEscrowBalance}</div>
                        </div>
                </div>
                <hr />
        </div>    
      );
  }
}
export default SyndicatePositions;
