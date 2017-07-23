import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import Confirmation from './Confirmation';
import EnterPolicyDetails from './EnterPolicyDetails';
import SelectPolicy from './SelectPolicy';



export default class BuyPolicy extends Component{

    

    
    render(){
        const steps =
    [
      {name: 'Select Policy', component: <SelectPolicy />},
      {name: 'Enter Policy Details', component: <EnterPolicyDetails policyType={'mac'} />},
    ];

        return(
           <div className='example'>
        <div className='step-progress' style={{textAlign: 'center'}}>
            <StepZilla 
            steps={steps}
            preventEnterSubmission={true}
            showNavigation={false}
            />
        </div>
        </div>
        )
    }
}