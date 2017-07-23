import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../../Components/Header/';
import Sidebar from '../../Components/Sidebar/';
import Breadcrumb from '../../Components/Breadcrumb/';
import Aside from '../../Components/Aside/';
import Footer from '../../Components/Footer/';
import InvestorDashboard from '../../views/InvestorDashboard/';
import ClientDashboard from '../../views/ClientDashboard/ClientDashboard';

import BuyPolicy from '../../Components/BuyPolicy';

import { init } from '../../ContractApi.js';

class Full extends Component {
    constructor(props){
        super(props);
        console.log('bpee');
        init();
    }
    render() {
        return ( 
            <div className = "app">
            <Header/>
            <div className = "app-body"> 
            <Sidebar {...this.props }/> 
            <main className = "main">
            <Breadcrumb/>
            <div className = "container-fluid">
            <Switch>
            <Route path = "/Investor" name = "Investor" component = { InvestorDashboard }/> 
            <Route path = "/Client" name = "Client" component = { ClientDashboard }/> 
            </Switch>
            </div> 
            </main> 
            <Aside/>
            </div> 
            <Footer/>
            </div>
        );
    }
}

export default Full;
