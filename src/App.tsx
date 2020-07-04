import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import Header from "./Header";
import Footer from "./Footer"; 
import Home from "./Home";
import Schedule from "./Schedule";
import './App.css'; 
import  AddTask  from './AddTask';


export default class App extends React.Component{   
   
    public render() {
      return (
        <>
          <Header/>
              <Switch>
              <Route exact path="/home"      component={()=><Home/>}/> 
              <Route exact path="/services"  component={()=><Schedule/>}/>    
              <Route exact path="/addtask"  component={()=><AddTask/>}/>   
              <Redirect from="/" to="/home" />
              </Switch>
          <Footer/>
        </>
      );
    }
}

