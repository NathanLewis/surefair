import React, { Component } from 'react';
import SelectPolicyButton from './SelectPolicyButton';

export default class SelectPolicy extends Component{
    render(){
        return(
        <div className="step step1">
        <div className="row">
                <SelectPolicyButton/>
        </div>
        </div>
        )
    }
}