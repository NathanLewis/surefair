import React, { Component } from 'react';
import ContractApi from './../../ContractApi';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import BuyPolicy from '../../Components/BuyPolicy';
class ClientQuotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      macbookQuotes: [],
      cropQuotes: [],
      modal: false
    };
  }

  
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    console.log('GETTING MACBOOK QUOTES');
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

  
  createQuote(isMacbook) {
    if (isMacbook) {
    ContractApi.createMacbookQuote(2016, "123456");
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
        <button type="button" className="btn btn-primary" onClick={() => { this.toggle() }}>New Quote </button>  
        <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> Quotes
              </div>
              <div className="card-block">
                <table className="table">
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
                        <td><button className="btn btn-success">Buy</button></td>
                      </tr>
                  )}
                </tbody>
            </table>
            </div>
            </div>
            </div>
            </div>
          </div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              <BuyPolicy onComplete={() => {this.toggle()}} />
            </ModalBody>
          </Modal>
          </div>
    );
  }
}

export default ClientQuotes;
