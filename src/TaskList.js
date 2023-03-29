import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

function TaskList({list, onDeleteList, onUpdateListImportance}){
    const[tasks, setTasks] = useState(list.tasks)
    const[importantChecked, setImportantChecked]=useState(false)

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

    function handleChangeOfImportance(){
    fetch(`http://localhost:9292/task-lists/importance/${list.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        important: !list.important,
      }),
    })
      .then((resp) => resp.json())
      .then((updatedList) => onUpdateListImportance(updatedList));
        setImportantChecked((importantChecked)=> !importantChecked)
    }

    function handleChangeOfUrgency(){
        console.log("urgency changed")
    }

    function handleCompleted(){
        console.log("task-list complete, yay")
    }

    return(
        <div className="task_list">
            <h2>{list.name}</h2>
            <label>
                Important
                <input 
                type="checkbox" 
                checked={importantChecked}
                onChange={handleChangeOfImportance}>
                </input>
            </label>
            <label>
                Urgent
                <input type="checkbox"></input>
            </label>
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