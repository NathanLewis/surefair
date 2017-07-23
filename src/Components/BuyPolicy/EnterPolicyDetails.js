import React, { Component } from 'react';
import ContractApi from '../../ContractApi';

export default class EnterPolicyDetails extends Component{
      constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSNoChange = this.handleSNoChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSNoChange(event) {
    this.setState({serialNumber: event.target.value});
  }

  handleYearChange(event) {
    this.setState({year: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    ContractApi.createMacbookQuote(this.state.year,this.state.serialNumber );
    this.props.onComplete();
  }

    render(){
        if(this.props.policyType === 'mac'){
        return(
             <div className="step step2">
                <div className="form-group row">
                <label htmlFor="serial-number" className="col-4 col-form-label">Serial Number</label>
                    <div className="col-8">
                        <input className="form-control" type="text" value={this.state.serialNumber} onChange={this.handleSNoChange} id="serial-number" placeholder="####-####-####-####"/>
                    </div>
                </div>
                <div className="form-group row">
                <label htmlFor="year" className="col-4 col-form-label">Year of Manufacture</label>
                    <div className="col-8">
                        <input className="form-control" type="number" value={this.state.year} onChange={this.handleYearChange} id="year" placeholder="YYYY"/>
                    </div>
                </div>
                <div>
                <button type="submit" className="btn btn-primary pull-right" onClick={this.handleSubmit}>Request Quotes</button>
                
                </div>
            </div>
        )
        }
     if(this.props.policyType === 'crop'){
        return(
             <div className="step step2">
                <div className="form-group row">
                <label for="serial-number" className="col-4 col-form-label">Latitude</label>
                    <div className="col-8">
                        <input className="form-control" type="number" value="" id="serial-number" placeholder="XX.XX"/>
                    </div>
                </div>
                <div className="form-group row">
                <label for="year" className="col-4 col-form-label">Longitude</label>
                    <div className="col-8">
                        <input className="form-control" type="number" value="" id="year" placeholder="XX.XX"/>
                    </div>
                </div>
            </div>
        )
        }
    }
}