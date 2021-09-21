import {combineReducers} from 'redux'
import filterReducer from './filterReducer'
import todoReducer from './TodoReducers'


export default combineReducers({
    todos : todoReducer , 
    filter : filterReducer
})