import React from 'react';
import {Control, Form, Errors, actions,} from 'react-redux-form';
import {Accordion, Card} from 'react-bootstrap';
import axios from 'axios'; 
import {connect} from 'react-redux'; 
import {CardImg,  CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Label, Col, Row, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {data} from './data'; 
import {fetchTasksAction} from './redux/reducers/ActionCreators';
import ModalTask from './ModalTask';

/* Configure redux state and actions for dispatching */
const mapStateToProps = (reduxState: any) => ({
     tasks: reduxState.tasks
});
  
const mapDispatchToProps  = ({
    resetFeedbackForm : () => actions.reset('feedback'),
    fetchTasksAction
 });


export interface IHomeProps{
    resetFeedbackForm : ()=>void
    fetchTasksAction: (tasKs : Array<ITask>)=>void
}

export interface IHomeState{
    tasks: Array<ITask>,
    isModalOpen: boolean
}

export interface ITask{
    id: number,
    title: string, 
    description: string,
    creator: string,
    priority: number,
    currentCategory: number,    
    assignee: string,
}


export class Home extends React.Component<IHomeProps, IHomeState>{
    constructor(props : IHomeProps){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.state = {
            tasks: data,
            isModalOpen: false
        }
    }

    componentDidMount(){
        axios({
            method: "POST",
            url: "http://localhost:3001/getTasks", 
            data:{          
            }
        }).then((response: any)=> { 
            console.log(response)
            if (response.data.msg === 'Success'){
                this.props.fetchTasksAction(response.tasks);
            }else if (response.data.msg === 'Fail'){
                console.log("Try again");
                alert("Failed to fetch results")
            }
        })
    }
   
    handleSubmit(values : any){
        console.log(values);
          axios({
           method: "POST",
           url: "http://localhost:3001/Send", 
           data:{
               name: values.name,
               email: values.email,
               messageHtml: values.message + ' \r\n Do they agree to a reply: ' + (values.agree !==  '').toString()
               
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
    
    

    renderTask(task:ITask, category: number){
        return(            
                (task.currentCategory === category ) ? 
                <div key={task.id} className="col-12 col-md-5 m-1">            
                    <Card>                                                 
                        <CardBody>
                            <CardTitle>{task.title}</CardTitle>
                            <CardText>{task.description}</CardText>
                            <Button>
                                Move up
                            </Button>
                            <Button>
                                Move Down                                
                            </Button>
                            <Button onClick={()=><ModalTask isModalOpen={true}/>}>
                                Update Task
                            </Button>
                        </CardBody>
                    </Card>
                </div>  
                :
                <></>            
            
        );
    }
    
    render(){
        return(
            <div className="container content">                            
               <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <h5>Planning</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                {this.state.tasks.map((tk) => this.renderTask(tk, 0))}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          <h5>In Progress</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                            {this.state.tasks.map((tk) => this.renderTask(tk, 1))}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                          <h5>Needs Review</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                            {this.state.tasks.map((tk) => this.renderTask(tk, 2))}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                          <h5>Finished</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                            {this.state.tasks.map((tk) => this.renderTask(tk, 3))}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>                  
               </Accordion>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home); 