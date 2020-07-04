import React from 'react';
import {connect} from 'react-redux'; 

/* Configure redux state and actions for dispatching */  
const mapStateToProps = ({} : {}) => ({ 
     
}); 

/* Configure local component state and props */
export interface IFooterProps {
    
}

export interface IFooterState{
    items: Array<any>
}

export  class Footer extends React.Component<IFooterProps, IFooterState>{
   
    render(){
        return( 
        <div className="container-fluid footer ">
                <div className="row">  
                    <div className="col-12 justify-center text-center">
                        <h6> JoeAvniTaskTracker </h6>
                            <img src={require("./constants/task.jpg")} alt="task"  style={{ display: 'block', width: "125px", paddingBottom:"1px"}}/> 
                            {/*this.renderItem(this.props.pharmacist.BusinessAffiliates)
                               TODO: images cannot be imported with require in array format, will have to create static loaders 
                            */}
                    </div>                    

                    <div className="col-12 justify-center hours">          
                           
                            <i className="fa fa-envelope fa-lg"></i> 
                            <a href="mailto:joeavnitasktracker@gmail.com"><b> : joeavnitasktracker <br/></b></a>                                             
                    </div> 
                </div> 
                <div className="row justify-content-center">
                       <p id="copyRight">© Copyright 2020 JoeAvniTaskTracker</p>
                </div>                             
        </div>
        );
    }
}

export default connect(mapStateToProps)(Footer);