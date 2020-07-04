import ActionTypes from './ActionTypes';
import {createSelector} from 'reselect'; 
import { ITask } from '../../Home';

// This is used to give the application an initial state 
const cartValues = {
    cartSubTotal: 0 ,
    cartTax: 0,
    cartTotal : 0,
}
const initialState = {   
 tasks: []

}

interface IReduxState{
    tasks: Array<ITask>
}

/* Selectors to return data from redux store */
export const getTasksSelector  = (reduxState: any) => reduxState.tasks;

/* Derived selectors to improve memoization */
/* Note: The arguments across selectors have to be the same
         since I have two selectors in [] then the next selector can take
         two arguments
         These functions when called return a selector using reselect which helps in 
         memoization and making things faster 
*/

/* Shared action payload */
interface IReducerAction {
    type: string
}

/*********** Reducers to change data in redux store  **********/



// To add one product to either detailed product or cart
interface IAddProductAction extends IReducerAction{
    product : any
    products : Array<any>
}

const initialDetailProduct : any = {
    id         :  0,
    name       : "",
    description: "",
    price      : 0,
    review     : "",
    count      : 0,
    total      : 0,
    inCart     :false,
    img        :""
}


interface IUpdateTasksAction extends IReducerAction{
    tasks: Array<ITask>
    
}

interface IUpdateTasks{
}
export const updateTasks = (currentTasks: IUpdateTasks = [], action : IUpdateTasksAction) => {
    switch(action.type){       
        case ActionTypes.FETCHTASKS:
            return action.tasks                    
         default:          
            return currentTasks;
    }
}

interface IAddTaskAction extends IReducerAction{
    task: ITask
    
}


export const addTask = (currentTasks: any = {}, action : IAddTaskAction) => {
    switch(action.type){       
        case ActionTypes.FETCHTASKS:
            return [...currentTasks, action.task]                    
         default:          
            return currentTasks;
    }
}
