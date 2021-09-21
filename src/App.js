import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {  ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { useRef } from 'react';
import { addTodo, toggleFilter } from './actions/actions';
import TodoList from "./TodoList";
const App =() => {
  const todoList = useSelector (state => state.todos) 
  const dispatch = useDispatch() 
  const description = useRef()
  const filter = useSelector (state => state.filter)
   

  
  const filteredList = () => {
 switch (filter) {
  case 'undone' : 
  return todoList.filter ( elm => elm.isDone === false )
  case 'done' : 
    return todoList.filter ( elm => elm.isDone === true )
   default:
    return todoList
 }

    
  }
  
  return (
   <div  className="App">
      <h1> TODO APP </h1>
      <input  ref={description} type='text' placeholder="new Todo ?" />
      <Button onClick={() =>dispatch( addTodo(description.current.value))} > ADD </Button>
      <ButtonGroup> 
      <Button variant="secondary" onClick={()=> dispatch(toggleFilter('all'))}> All</Button>
      <Button variant="secondary" onClick={()=> dispatch(toggleFilter('undone'))}> Undone </Button>
      <Button variant="secondary" onClick={()=> dispatch(toggleFilter('done'))}> Done </Button>  
      </ButtonGroup>
      <TodoList className="todo" todoList={filteredList()}> </TodoList>
   </div>
  )
}

export default App;
