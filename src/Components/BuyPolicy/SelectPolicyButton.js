import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

export default class SelectPolicyButton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return
        <Button type="button" className="btn" onClick={() => {}}><img src="public/img/buttons/macbook.jpg" /></Button>
    }
}