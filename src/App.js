import React,{useState} from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState(["elma","armut"]);
  return (
    <div className="App">
      <AddTodo/>
      {
        todoList.map((e, i)=>{
          return <TodoListElement key={i} name={e}/>
        })
      }
      
    </div>
  );
}
const AddTodo=props=>{
  const [newTodo, setNewTodo]=useState("")
  return(
   <div>
     <input type="text" value={newTodo} onChange={e=>setNewTodo(e.target.value)} />
   </div>
  )
}


const TodoListElement=props=>{
  return(
    <h1>{props.name}</h1>
  )
}
export default App;
