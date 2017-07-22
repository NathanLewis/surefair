import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import Confirmation from './Confirmation';
import EnterPolicyDetails from './EnterPolicyDetails';
import SelectPolicy from './SelectPolicy';
const steps =
    [
      {name: 'Step 1', component: <SelectPolicy />},
      {name: 'Step 2', component: <EnterPolicyDetails />},
      {name: 'Step 3', component: <Confirmation />}
    ]

export default class BuyPolicy extends Component{
    
    render(){
        return(
           <div className='step-progress' showNavigation={true} showSteps={true}>
            <StepZilla steps={steps}/>
        </div>
        )
    }
}