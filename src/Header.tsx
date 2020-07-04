import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, 
       NavbarToggler,Collapse, NavItem, 
       Jumbotron, Button,  Media,  } from 'reactstrap'; 
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'; 
//import {toEnglishAction, toSpanishAction} from '../../redux/actions/ActionCreators';

/* Configure redux state and actions for dispatching */

  
const mapStateToProps = ({} : {}) => ({
    
});
  
const dispatchLanguage  = ({
  
 });

/* Configure local component state and props */
 export interface IHeaderProps{
    
}
export interface IHeaderState{
 
}

export class Header extends Component<IHeaderProps, IHeaderState> {  

    render() {
        return (
            
        <Jumbotron fluid>
            <div className="container-fluid">
            <div className="row">
                    <Navbar className="navbar-dark sticky" id="navbar" light expand="md">                                    
                        <NavbarToggler />
                            <Collapse  navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                            <span className="fa fa-home fa-lg"></span>
                                             <b> Home</b> 

                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/taskschedule">
                                            <span className="fa fa-tasks fa-lg"></span>

                                             <b> Task Schedule </b> 
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/addtask">
                                            <span className="fa fa-plus fa-lg"></span>
                                             <b> Add Task </b> 
                                        </NavLink>
                                    </NavItem>                                       
                                </Nav>                    
                            </Collapse>
                            <NavbarBrand className="navbar-brand">                                
                                    <h3><b> Welcome</b></h3>                           
                           </NavbarBrand>         
                    </Navbar>                  
                </div>
                
                <div className="row justify-content-center" id="pill"> 
                    <div className="col-12 col-sm-3 headerContent">
                            <Media href="#" >
                              <Media object className="logo" src={require("./constants/tasklogo.jpg")} alt="Task Tracker Image" />                           
                           </Media>
                    </div>
                    <div className="col-12 col-sm-4 headerContent">            
                       <Media>                           
                           <Media body>
                               <Media heading>
                                  <><b> JoeAvni's </b><p>Task Tracker</p></>                                
                               </Media>                                    
                                    <p id="subheading">Enjoy the extra time earned through our <br/>task tracker!</p>                               
                           </Media>                           
                       </Media>                      
                       
                    </div>
                    <div className="col-12 col-sm-2  headerContent">
                        <Button outline id="button" >
                            <span className="fa fa-sign-in fa-md">
                               Login
                            </span>
                        </Button>
                    </div>          
                </div>              
            </div>  
        </Jumbotron>    
        );
    }

}

export default connect(mapStateToProps, dispatchLanguage)(Header); 

