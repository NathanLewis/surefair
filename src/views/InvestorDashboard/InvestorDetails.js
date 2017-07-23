import React, { Component } from 'react';
import ContractApi from './../../ContractApi';
import { Progress } from 'reactstrap';

class InvestorDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      investorData: {},
      macbookQuotes: [],
      cropQuotes: [],
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

    ContractApi.getMacbookQuotes().then((result) => {
      console.log('MACBOOK QUOTES = ' + JSON.stringify(result));
      this.setState({
        macbookQuotes: result
      });
    }).catch((error) => {
      console.log(error);
    });

    ContractApi.getCropQuotes().then((result) => {
      console.log('CROP QUOTES = ' + JSON.stringify(result));
      this.setState({
        cropQuotes: result
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  getQuote() {
    ContractApi.createMacbookQuote(2017, "123456");
  }

  buyCropInsurance(quoteId) {
    ContractApi.purchaseInsurance(true, quoteId);
  }

  buyMacbookInsurance(quoteId) {
    ContractApi.purchaseInsurance(false, quoteId);
  }

  render() {
    console.log(JSON.stringify(this.state.investorData));
    const total = this.state.investorData.escrowBalance + this.state.investorData.totalSupply;
    if(total) {
    return (
      <div className="card">
      <div className="card-header">
        Dashboard
      </div>
      <div className="card-block">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-6">
                <div className="callout callout-info">
                  <div className="text-muted h5">Syndicate Total Balance</div><br/>
                  <strong className="h4">{this.state.investorData.totalSupply.toLocaleString()}</strong>
                  <div className="chart-wrapper">
                    <canvas id="sparkline-chart-1" width="100" height="30"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="callout callout-danger">
                  <div className="text-muted h5">Syndicate Escrow Balance</div><br/>
                  <strong className="h4">{this.state.investorData.escrowBalance.toLocaleString()}</strong>
                  <div className="chart-wrapper">
                    <canvas id="sparkline-chart-2" width="100" height="30"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-0"/>
          </div>
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-6">
                <div className="callout callout-warning">
                  <div className="text-muted h5">Syndicate Liquid Balance</div><br/>
                  <strong className="h4">{total.toLocaleString()}</strong>
                  <div className="chart-wrapper">
                    <canvas id="sparkline-chart-3" width="100" height="30"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="callout callout-success">
                  <div className="text-muted h5">My Balance</div><br/>
                  <strong className="h4">{this.state.investorData.userBalance.toLocaleString()}</strong>
                  <div className="chart-wrapper">
                    <canvas id="sparkline-chart-4" width="100" height="30"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
  else {
    return(
      <div> </div>
    )
  }
}
}

export default InvestorDetails;
