

class Overview extends React.Component {
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
      return (
        <div>
            <div className="row">
            <div className="col-md-6">
            <span className="h1 facebook">Dashboard</span>
                </div>
                <div className="col-md-2 col-md-offset-2">
                 <span className="h3" style={{textAlign:"right"}}>Syndicate Balance</span>
                 <span className="h3" style={{textAlign:"right"}}>Escrow Balance</span>
                 <span className="h3" style={{textAlign:"right"}}>Your Liquid Balance</span>      
                 <span className="h3" style={{textAlign:"right"}}>Your Escrow Balance</span>
                    </div>
                    <div className="col-md-2">
                 <span className="h3" style={{textAlign:"left"}}>{investorData.totalSupply}</span>
                 <span className="h3" style={{textAlign:"left"}}>{investorData.escrowBalance}</span>
                 <span className="h3" style={{textAlign:"left"}}>{investorData.userBalance}</span>      
                 <span className="h3" style={{textAlign:"left"}}>{investorData.userEscrowBalance}</span>
                        </div>
                </div>

        </div>    
      );
  }


}