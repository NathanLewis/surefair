import React, { Component } from 'react';
import ClientPositions from './ClientPositions';
import ClientQuotes from './ClientQuotes';
import BuyPolicy from '../../Components/BuyPolicy/';

class ClientDashboard extends Component {

    render() {
        return ( <
            div className = "animated fadeIn" >
            <ClientQuotes />
            <ClientPositions />
            </div>
        )
    }
}

export default ClientDashboard;
