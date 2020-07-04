/**
 * Creates the redux store
 */

import {createStore, compose, combineReducers } from 'redux';
import {updateTasks, addTask} from './reducers'; 
import {createForms} from 'react-redux-form';



const InitialFeedback = {
  name : '',
  title:'',
  creator:'',
  currentCategory:'',
  description: '',
  priority :'',
  assignee: ''
}
declare global {
   interface Window {
     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
   }
 }
 
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
 export const rootReducer = combineReducers({
   tasks    : updateTasks, addTask,   
    ...createForms({
     feedback:InitialFeedback
   }),
 });
 // This reduxState adds a reduxState : " " property to the store
 export const store = createStore(
       rootReducer,
       composeEnhancers()
   );
 
export default store; 