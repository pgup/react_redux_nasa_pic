import { combineReducers } from 'redux';
import AppReducer from './app_reducer';
//https://stackoverflow.com/questions/7764536/pass-object-to-javascript-function

//hers passing objects arguments to a function. cobineducer(firs: 1, astronomy: AppReducer ....)

const rootReducer = combineReducers({
    
    astronomy: AppReducer

})

export default rootReducer; // we are exporting rootreducer