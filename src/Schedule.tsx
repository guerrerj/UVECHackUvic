import React from 'react';
import  {Button, Label, Col, Row} from 'reactstrap';
import {Control, Form, Errors, actions} from 'react-redux-form';
import axios from 'axios'; 
import {connect} from 'react-redux'; 

/* Configure redux state and actions for dispatching */

export interface IScheduleProps{
 
}

export interface IScheduleState{
}

export class Schedule extends React.Component<IScheduleProps, IScheduleState>{

    
    render(){
        return(
            <div className="container content">                            
                <div className ="row ">
                  
              </div>
            </div>
        );
    }
}

export default connect()(Schedule); 