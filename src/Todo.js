import React from 'react'
import {useState} from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, toggleTodo } from './actions/actions'







const Todo = ({todo}) => {
const  dispatch = useDispatch()
const [input, setInput] = useState(todo);
const handleEdit = () => {
    dispatch(editTodo(input))

}
    return (
        <div style = {{border : 'solid white 2px' , margin  : 10 , display:'flex' }}>
<input style={{ textDecoration: todo.isDone ? "line-through" : "none" }} onChange={(e) => setInput({ ...input, description: e.target.value })} type="text" value={input.description} >
            </input>            <div>
            <Button variant="danger" onClick={()=> dispatch(deleteTodo(todo.id))}> delete </Button>
            <Button onClick={() =>dispatch(toggleTodo(todo.id))} variant={todo.isDone ? "success" : "warning"}> {todo.isDone ? "Done" : "Undone"} </Button>
            <Button variant="primary" onClick={handleEdit} >Edit</Button>


   

            </div>
        </div>
    )
}

export default Todo

