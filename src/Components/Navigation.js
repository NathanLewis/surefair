import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export default class Navigation extends Component{
    render(){
        return <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">SureFair Insurance</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
    }
}