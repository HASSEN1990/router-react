import {v4 } from 'uuid'
import {ADD_TODO, DELETE_TODO, TOGGLE_TODO , EDIT_TODO} from '../actions/actionsTypes'


const initState = [
    {
        id : v4(), 
        description : 'Learn React', 
        isDone : true
    }
]









const todoReducer =  (state = initState,{type , payload}) => {
switch (type) {
    case ADD_TODO:
        
       return [payload,...state]


       case DELETE_TODO : 

       return state.filter(elm => elm.id != payload)
        
       case TOGGLE_TODO : 
           
       return state.map(elm => elm.id === payload ? {...elm,isDone: !elm.isDone} : elm)  
      case EDIT_TODO:
            return  state.map((elm) => elm.id === payload.id ? payload : elm)
            
       default:
        return state
}
}
export default todoReducer