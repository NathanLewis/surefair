import React, { Component } from 'react';
import ContractApi from './../../ContractApi';

class ClientQuotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      macbookQuotes: [],
      cropQuotes: [],
    };
  }

  componentDidMount() {

    ContractApi.getMacbookQuotes().then((result) => {
      console.log('MACBOOK QUOTES = ' + JSON.stringify(result));
      let thingy = [];
      for (let i = 0 ; i < result.length; i++) {
        console.log('thingy' + JSON.stringify(result[i]));
        thingy.push(result[i]);
      }
      console.log('type of = ' + typeof(thingy));
      this.setState({
        macbookQuotes: thingy
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

  getQuote(isMacbook) {
    if (isMacbook) {
    ContractApi.createMacbookQuote(2017, "123456");
    } else {
     ContractApi.createCropQuote(20, 540);     
    }
  }

  buyCropInsurance(quoteId) {
    ContractApi.purchaseInsurance(true, quoteId);
  }

  buyMacbookInsurance(quoteId) {
    ContractApi.purchaseInsurance(false, quoteId);
  }

  render() {
    console.log(JSON.stringify(this.state.investorData));
    console.log(this.state.macbookQuotes);
    return (
      <div>
        <button onClick={() => { this.getQuote(true) }}>Get a Macbok Quote</button>
        <button onClick={() => { this.getQuote(false) }}>Get a Crop Quote</button>        
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
              {this.state.cropQuotes.map((cropQuote, id) =>
                  <tr key={id}>
                    <td>{cropQuote.quoteId}</td>
                    <td>{cropQuote.premium}</td>
                    <td>{cropQuote.payout}</td>
                    <td>{cropQuote.duration}</td>
                    <td><button onClick={() => { this.buyCropInsurance(cropQuote.quoteId) }}>Buy</button></td>
                  </tr>
              )}
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
              {this.state.macbookQuotes.map((macbookQuote, id) =>
                  <tr key={id}>
                    <td>{macbookQuote.quoteId}</td>
                    <td>{macbookQuote.premium}</td>
                    <td>{macbookQuote.payout}</td>
                    <td>{macbookQuote.duration}</td>
                    <td><button onClick={() => { this.buyMacbookInsurance(macbookQuote.quoteId) }}>Buy</button></td>
                  </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ClientQuotes;
