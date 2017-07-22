import React, { Component } from 'react';
import SyndicatePositions from './SyndicatePositions';
import InvestorDetails from './InvestorDetails';

class InvestorDashboard extends Component {

    render() {
        return ( <
            div className = "animated fadeIn" >
            <InvestorDetails />
            <SyndicatePositions />
            </div>
        )
    }
}

export default InvestorDashboard;
