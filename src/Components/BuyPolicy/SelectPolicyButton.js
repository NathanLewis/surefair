import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class SelectPolicyButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const imageUrl = require("../../images/buttons/macbook.jpg");
        return ( <Button type = "button"
                className = "btn"
                onClick = {() => {} } >
                <img src = {imageUrl} />
            </Button>
        )
    }
}

 