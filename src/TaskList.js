import React, { useState } from "react";
import TaskForm from "./TaskForm";

function Task({list}){
    const[tasks, setTasks]=useState([])

    function handleNewTask(newTask){
        setTasks([...tasks, newTask])
    }

    function handleDelete(){
        console.log('deleted')
    }

    function handleEdit(){
        console.log("edited")
    }

    return(
        <div className="task_list">
            <h2>{list}</h2>
            <button onClick={handleDelete}>🗑️</button>
            <button onClick={handleEdit}>✏️</button>
            <TaskForm onAddNewTask={handleNewTask}/>
        </div>
    )
}

export default Task;