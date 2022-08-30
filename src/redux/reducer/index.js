import {combineReducers} from "redux";
import {tasksReducer} from "./tasks";
import {taskReducer} from "./task";
import {personReduser} from "./person";

export const reducers = combineReducers({
    tasks: tasksReducer,
     task: taskReducer,
    person: personReduser,
   
});