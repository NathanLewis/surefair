import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import SelectPolicyButton from './SelectPolicyButton';

export default class SelectPolicy extends Component{
    render(){
        return(
        <div className="step step1" style={{textAlign: 'center'}}>
        <div className="row" style={{marginTop: 50, marginBottom: 50}}>
          <div className="col-md-6 col-sm-6" style={{paddingTop: 50, 
          paddingBottom: 50, paddingLeft: 100, paddingRight: 100}}>
            <div className="social-box facebook">
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
          <div className="col-md-6 col-sm-6" style={{paddingTop: 50, 
          paddingBottom: 50, paddingLeft: 100, paddingRight: 100}}>
            <div className="social-box twitter">
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