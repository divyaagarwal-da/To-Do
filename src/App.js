import './App.css';
import Header from './MyComponents/Header';
import  Todos from './MyComponents/Todos';
import Footer  from './MyComponents/Footer'; 
import { useState, useEffect } from 'react';
import AddTodo  from './MyComponents/AddTodo';


function App() {
    let initTodo;
    if(localStorage.getItem("todos")===null){
      initTodo=[];
    }
    else{
      initTodo =  JSON.parse(localStorage.getItem("todos"));
    }
      
    const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if(todos.length === 0){
      sno = 0;
    } 
    else {
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  
  const Lightmode='bg-light text-black'
  const Darkmode='bg-dark text-white'
  const[mode, setMode]=useState(true);
  function toggleMode() {
    setMode(!mode)
  }

  return (
    <>
     <div className={mode?Lightmode:Darkmode}>
      <Header/>
      <div onClick={()=>{toggleMode()}}>
        <hi>Change mode</hi>
        <div className="form-check form-switch">
          <input className="form-check-input " type="checkbox" value=""  switch/>
          <label className="form-check-label " for="checkNativeSwitch">
            {mode?"Light-Mode":"Dark-Mode"}
          </label>
      </div>
      </div>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
