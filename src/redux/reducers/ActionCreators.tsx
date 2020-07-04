import ActionTypes from './ActionTypes';
import { ITask } from '../../Home';
export const fetchTasksAction = (payload : Array<ITask>) => ({
    type : ActionTypes.FETCHTASKS ,   
    tasks: payload
});

export const addTaskAction = (payload : ITask) => ({
    type : ActionTypes.ADDTASK ,   
    task: payload
});