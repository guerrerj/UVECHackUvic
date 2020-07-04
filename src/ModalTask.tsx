import React from 'react';
import  {Button, Label, Col, Row, Modal, ModalHeader, ModalBody} from 'reactstrap';
import {Control, Form, Errors, actions, Field} from 'react-redux-form';
import axios from 'axios'; 
import {connect} from 'react-redux'; 

const mapStateToProps = () => ({
     
});
  

interface IModalTaskProps{
    isModalOpen: boolean,
    resetFeedbackForm : ()=>void
    
}
const dispatchResetFeedback  = ({
    resetFeedbackForm : () => actions.reset('feedback') 
 });

interface IModalTaskState{
    isModalOpen: boolean
}

class ModalTask extends React.Component<IModalTaskProps, IModalTaskState>{
    constructor(props: IModalTaskProps){
        super(props); 

        this.state = {
         isModalOpen: this.props.isModalOpen
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this); 
    }
    
    handleSubmit(values: any){
        console.log(values);
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
               this.toggleModal(); 

           }else if (response.data.msg === 'Fail'){
               console.log("Try again");
           }
       })
        
      }
      
      toggleModal (){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        
    } 


    render(){
        return(
            <>            
            <Modal show={this.state.isModalOpen} isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader closeButton toggle={this.toggleModal}>
              Update Task
            </ModalHeader>
             <ModalBody>
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
                                <Label htmlFor="category" md={2}><b>Category</b> </Label>
                                <Col md={10}>
                                    <Control.text model=".category" id="category" name="category"
                                        placeholder= "Optional Category"
                                        className="form-control"
                                        validators={{                                            
                                        }}/>
                                        <Errors 
                                            className="text-danger"
                                            model=".category"
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
            </ModalBody>

            </Modal>
            </>
        );
    }
}

export default connect(mapStateToProps,dispatchResetFeedback)(ModalTask); 