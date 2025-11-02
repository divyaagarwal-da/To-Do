import React from 'react'
import TodoItem from './TodoItem';

export const Todos = (props) => {
  return (
    <div className='container' style={{minHeight: "70vh", margin: "40px auto"}}>
      <h3 className='my-3'>To-Do List</h3>
      {props.todos.length===0? "No Todos to display": 
      props.todos.map((todo)=> {
        return(
        <>
        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
        </>
      )
      })
      }
      
    </div>
  )
}

export default Todos
