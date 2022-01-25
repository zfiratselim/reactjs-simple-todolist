import React,{useState} from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState(["elma","armut"]);
  const handleTodoList=newEl=>{
   setTodoList(prev=>[newEl,...prev]);
  }
  return (
    <div className="App">
      <AddTodo handleTodoList={handleTodoList}/>
      {
        todoList.map((e, i) => {
          return <TodoListElement key={i} name={e}/>
        })
      }
      
    </div>
  );
}

const AddTodo=props=>{
  const [newTodo, setNewTodo] = useState("");
  return(
   <div className="addTodoCon">
     <input className="todotextbox" type="text" value={newTodo} onChange={e=>setNewTodo(e.target.value)} placeholder="add new todo!"/>
     <input type="button" value="Add" onClick={()=>props.handleTodoList(newTodo)}/>
   </div>
  )
}

const TodoListElement=props=>{
  const [checked,setChecked]= useState(false);
  return(
    <div className="card">
      <p className={checked?"line-through":""}>{props.name}</p>
      <input type="checkbox"  onChange={e=>setChecked(!checked)} checked={checked}/>
    </div>
  )
}

export default App;
