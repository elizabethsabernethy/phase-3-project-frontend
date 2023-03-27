import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

function TaskList({list}){
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
            {tasks.map((task)=>{
                return <Task task={task} key={task.id}/>
            })}
        </div>
    )
}

export default TaskList;