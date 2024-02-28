import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Taskinput from "./components/Taskinput";
import Taskitem from "./components/Taskitem";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [toDoList, setToDoList]= useState ([]);

  const addTask = (taskName)=>{
    const newTask = {taskName, checked: false} ;
    setToDoList([...toDoList, newTask])
    toast.info ("New task added",{
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
  })
  };

  function deleteTask (deleteTaskName) {
    setToDoList(toDoList.filter(task=> task.
      taskName !== deleteTaskName));
      toast.error ("deleted",{
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
    })
  };

  console.log(toDoList);
  return (
    <div className="App">
      <div className="container">
        <h1>Todo</h1>

        <Taskinput addTask={addTask} />

        <div className="toDoList">
          <span>To do</span>
          <ul className="list-items">
          {toDoList.map((task, key ) => (
          <Taskitem task ={task} key={key}
          deleteTask={deleteTask} />
          ))}
          </ul>  
        </div>
        <ToastContainer/>
      </div>
    </div>
  );
}

export default App;
