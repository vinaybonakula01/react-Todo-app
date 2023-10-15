import React,{useState} from 'react'
import Todoform from './Todoform'
import Todo from './Todo';

function Todolist() {
    const[todos,settodos]=useState([]);
    const addtodo=todo=>{
       if(!todo.text||/^\s*$/.test(todo.text)){
        return;
       } 
       const newtodos=[todo,...todos];
       settodos(newtodos);
      
    }
    const updateTodo=(todoId,newValue)=>{
        if(!newValue.text||/^\s*$/.test(newValue.text)){
            return;
           } 
        settodos(prev=>prev.map(item=>(item.id===todoId?newValue:item)))

    }
    const removeTodo=id=>{
        const removeArr =[...todos].filter(todo=>todo.id !==id);
        settodos(removeArr);
    }
    
    const completeTodo=id=>{
     let updatedTodos=todos.map(todo=>{
        if(todo.id===id){
            todo.isComplete=!todo.isComplete
        }
        return todo
     })
    settodos(updatedTodos);
    }

  return (
    <div>
        <h1>What's the plan for today?</h1>
      <Todoform onSubmit={addtodo}/>
      <Todo todos={todos}
       completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}/>

    </div>
  )
}

export default Todolist
