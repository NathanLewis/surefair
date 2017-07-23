import React, { Component } from 'react';

export default class EnterPolicyDetails extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.policyType === 'mac'){
        return(
             <div className="step step2">
                <div className="form-group row">
                <label for="serial-number" className="col-2 col-form-label">Serial Number</label>
                    <div className="col-10">
                        <input className="form-control" type="text" value="" id="serial-number" placeholder="####-####-####-####"/>
                    </div>
                </div>
                <div className="form-group row">
                <label for="year" className="col-2 col-form-label">Year of Manufacture</label>
                    <div className="col-10">
                        <input className="form-control" type="number" value="" id="year" placeholder="YYYY"/>
                    </div>
                </div>
            </div>
        )
        }
     if(this.props.policyType === 'crop'){
        return(
             <div className="step step2">
                <div className="form-group row">
                <label for="serial-number" className="col-2 col-form-label">Latitude</label>
                    <div className="col-10">
                        <input className="form-control" type="number" value="" id="serial-number" placeholder="XX.XX"/>
                    </div>
                </div>
                <div className="form-group row">
                <label for="year" className="col-2 col-form-label">Longitude</label>
                    <div className="col-10">
                        <input className="form-control" type="number" value="" id="year" placeholder="XX.XX"/>
                    </div>
                </div>
            </div>
        )
        }
    }
}