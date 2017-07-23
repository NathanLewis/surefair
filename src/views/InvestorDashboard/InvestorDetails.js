import React, { Component } from 'react';
import ContractApi from './../../ContractApi';

class InvestorDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      investorData: {},
      macbookQuotes: {},
      cropQuotes: {},
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
            <div className="h4" style={{ textAlign: "left" }}>{this.state.investorData.totalSupply}</div>
            <div className="h4" style={{ textAlign: "left" }}>{this.state.investorData.escrowBalance}</div>
            <div className="h4" style={{ textAlign: "left" }}>{this.state.investorData.escrowBalance + this.state.investorData.totalSupply}</div>
            <div className="h4" style={{ textAlign: "left" }}>{this.state.investorData.userBalance}</div>
          </div>
        </div>
        <hr />
        <button onClick={() => { this.getQuote() }}>Get a Quote</button>
        <div>
          <h3>Crop Quotes</h3>
          <table>
            <thead>
              <th>Quote Id</th>
              <th>Premium</th>
              <th>Payout</th>
              <th>Duration</th>
              <th />
            </thead>
            <tbody>
              {this.state.cropQuotes.map((cropQuote, id) => {
                <tr key={id}>
                  <td>{cropQuote.quoteId}</td>
                  <td>{cropQuote.premium}</td>
                  <td>{cropQuote.payout}</td>
                  <td>{cropQuote.duration}</td>
                  <td><button onClick={() => { this.buyCropInsurance(cropQuote.id)}}>Buy</button></td>
                </tr>
              })}
            </tbody>
          </table>
          <br />
          <h3>Macbook Quotes</h3>
          <table>
            <thead>
              <th>Quote Id</th>
              <th>Premium</th>
              <th>Payout</th>
              <th>Duration</th>
              <th />
            </thead>
            <tbody>
              {this.state.macbookQuotes.map((macbookQuote, id) => {
                <tr key={id}>
                  <td>{macbookQuote.quoteId}</td>
                  <td>{macbookQuote.premium}</td>
                  <td>{macbookQuote.payout}</td>
                  <td>{macbookQuote.duration}</td>
                  <td><button onClick={() => { this.buyMacbookInsurance(macbookQuote.id)}}>Buy</button></td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default InvestorDetails;
