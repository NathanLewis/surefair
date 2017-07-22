import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import Confirmation from './Confirmation';
import EnterPolicyDetails from './EnterPolicyDetails';
import SelectPolicy from './SelectPolicy';
const steps =
    [
      {name: 'Select Policy', component: <SelectPolicy />},
      {name: 'Enter Policy Details', component: <EnterPolicyDetails />},
      {name: 'Confirmation', component: <Confirmation />},
      {name: 'Confirmation', component: <Confirmation/>}
    ]

export default class BuyPolicy extends Component{
    
    render(){
        return(
           <div className='example'>
        <div className='step-progress'>
            <StepZilla 
            steps={steps}
            preventEnterSubmission={true}
            nextTextOnFinalActionStep={"Accept"}
            />
        </div>
        </div>
        )
    }
}