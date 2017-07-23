import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import SelectPolicyButton from './SelectPolicyButton';

export default class SelectPolicy extends Component{
    render(){
        return(
        <div className="step step1" style={{textAlign: 'center'}}>
        <div className="row" style={{marginTop: 10, marginBottom: 10}}>
          <div className="col-md-6 col-sm-6" style={{padding:10}}>
            <div className="social-box facebook" onClick={() => this.props.jumpToStep(1)}>
              <i className="fa fa-laptop"></i>
              <ul>
                <li>
                  <strong>100</strong>
                  <span>Providers</span>
                </li>
                <li>
                  <strong>100k</strong>
                  <span>Policies</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-sm-6" style={{padding:10}}>
            <div className="social-box twitter"  onClick={this.props.onPolicyTypeSelected}>
              <i className="fa fa-tree"></i>
              <ul>
                <li>
                  <strong>30</strong>
                  <span>Providers</span>
                </li>
                <li>
                  <strong>200</strong>
                  <span>Policies</span>
                </li>
              </ul>
            </div>
          </div>
        
          
        </div>
        </div>
        )
    }
}