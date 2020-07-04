import React from 'react';
import  {Button, Label, Col, Row} from 'reactstrap';
import {Control, Form, Errors, actions, Field} from 'react-redux-form';
import axios from 'axios'; 
import {connect} from 'react-redux'; 
import {addTaskAction} from './redux/reducers/ActionCreators';
import { ITask } from './Home';

/* Configure redux state and actions for dispatching */
const mapStateToProps = () => ({
     
});
  
const dispatchResetFeedback  = ({
    resetFeedbackForm : () => actions.reset('feedback'), 
    addTaskAction
 });


/* Configure local component state and props */

//const required=(val: any) => val && val.length; // checks to see if value greater than 0
const validEmail = (val: any) => /^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,4}$/i.test(val)

export interface IAddTaskProps{   
    resetFeedbackForm : ()=>void, 
    addTaskAction : (Task:ITask)=>void
}

export interface IAddTaskState{
}

export class AddTask extends React.Component<IAddTaskProps, IAddTaskState>{
    constructor(props : IAddTaskProps){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(values : any){
        console.log(values);

        if (values !== undefined){           
            this.props.addTaskAction(values)
            this.props.resetFeedbackForm();
        }
         
          axios({
           method: "POST",
           url: "http://localhost:3001/addtask", 
           data:{//Todo: update
               title: values.title,
               creator: values.creator,
               description: values.description, 
               priority: values.priority,
               category: values.category
               
           }
       }).then((response: any)=> { 
           if (response.data.msg === 'Success'){
               console.log("Email was sent");
               this.props.resetFeedbackForm();
           }else if (response.data.msg === 'Fail'){
               console.log("Try again");
           }
       })
    }  
    
    render(){
        return(
            <div className="container content">                            
                <div className ="row ">
                  <div className="col-12 d-flex justify-content-center">
                       <h3><b>Add a New Task</b></h3>
                  </div>
                  <div className="col-10 offset-1 justify-content-center">
                      <Form model="feedback" onSubmit={(values:any)=>this.handleSubmit(values)}>                          
                                <Row className="form-group">
                                    <Label htmlFor="title" md={2}> <b>Title</b> </Label>
                                    <Col md={10}>
                                        <Control.text model=".title" id="title" name="title"
                                            placeholder= "Task Title" 
                                            className = "form-control"
                                            validators={{
                                            
                                            }}/>
                                            <Errors 
                                                className="text-danger"
                                                model=".title"
                                                show="touched"
                                                messages={{
                                                    required: 'Required ',
                                                    minLength: 'Must be greater than 2 characters ',
                                                    maxLength: 'Must be less than 25 characters '
                                                }}/>
                                    </Col>
                                </Row> 
                                <Row className="form-group">
                                    <Label htmlFor="creator" md={2}> <b>Name</b> </Label>
                                    <Col md={10}>
                                        <Control.text model=".creator" id="creator" name="creator"
                                            placeholder= "Full Name" 
                                            className = "form-control"
                                            validators={{
                                            
                                            }}/>
                                            <Errors 
                                                className="text-danger"
                                                model=".creator"
                                                show="touched"
                                                messages={{
                                                    required: 'Required ',
                                                    minLength: 'Must be greater than 2 characters ',
                                                    maxLength: 'Must be less than 25 characters '
                                                }}/>
                                    </Col>
                                </Row> 
                            
                            <Row className="form-group">
                                <Label htmlFor="currentCategory" md={2}><b>Category</b> </Label>
                                <Col md={10}>
                                    <Control.text model=".currentCategory" id="currentCategory" name="currentCategory"
                                        placeholder= "Optional Category"
                                        className="form-control"
                                        validators={{                                            
                                        }}/>
                                        <Errors 
                                            className="text-danger"
                                            model=".currentCategory"
                                            show="touched"
                                            messages={{
                                                required: 'Required ',
                                                validEmail: 'Invalid Email Address'
                                            }}/>
                                </Col>
                                </Row>
                            <Row className="form-group">
                              <Col md={{size:6, offset: 2}}>
                                    <Field model=".priority">
                                        <label><input type="radio" value="High"/> High</label>
                                        <label><input type="radio" value="Medium"/> Medium</label>
                                        <label><input type="radio" value="Low"/> Low</label>
                                    </Field>                                  
                              </Col>                                 
                             </Row>
                          <Row className="form-group">
                            <Label htmlFor="description" md={2}> <b>Description</b> </Label>  
                            <Col md={10}>
                                <Control.textarea 
                                    model=".description" 
                                    id="description" 
                                    name="description"
                                    className = "form-control" 
                                     />
                            </Col>                            
                            </Row>
                          <Row className="form-group">
                              <Col md={{size:10, offset:2}}>
                                  <Button 
                                        type="submit" 
                                        color="primary">
                                             <b>Submit</b>
                                  </Button>
                              </Col>
                          </Row>
                      </Form>
                  </div>
              </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,dispatchResetFeedback)(AddTask); 