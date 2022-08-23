import React from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState,useEffect } from 'react'
import AddTask from "./components/AddTask";

const getLocalStorage=()=>{
  let list=localStorage.getItem("lists");
  if(list){
    return JSON.parse(localStorage.getItem('lists'));

  }else{
    return []
  }
}

function App() {
const[showAddTask,setShowAddTask]=useState(false);
 const[tasks,setTasks]=useState(getLocalStorage());

const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id !==id))
}


useEffect(()=>{
  localStorage.setItem("lists",JSON.stringify(tasks))
},[tasks])
const toggleReminder=(id) =>{
 setTasks(tasks.map((task)=>task.id===id ? {...task,reminder: !task.reminder}:task))
 
}
const addTask=(task)=>{
  const id =Math.floor(Math.random() *10000) +1
  const newTask={id, ...task}
  setTasks([...tasks,newTask])

}
  return (
    <div className="container">
    <Header onAdd={()=>setShowAddTask(!showAddTask)}
    showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={addTask}/>}
    { tasks.length>0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :'NO TASK TO SHOW'}
    </div>
  );
}

export default App;
