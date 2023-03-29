import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

function TaskList({list, onDeleteList}){
    const[tasks, setTasks] = useState(list.tasks)

    function handleNewTask(newTask){
       setTasks([...tasks, newTask])
    }

    function handleDelete(){
        fetch(`http://localhost:9292/task-lists/${list.id}`, {
          method: "DELETE",
          })
            .then((resp) => resp.json())
            .then(() => onDeleteList(list));
    }

    function handleEdit(){
        console.log("edited")
    }

    return(
        <div className="task_list">
            <h2>{list.name}</h2>
            <button onClick={handleDelete}>🗑️</button>
            <button onClick={handleEdit}>✏️</button>
            <TaskForm onAddNewTask={handleNewTask} list_id={list.id}/>
            {typeof tasks !== "undefined" ? tasks.map((task)=>{
                return <Task task={task} key={task.id}/>
            }): null} 
        </div>
    )
}

export default TaskList;