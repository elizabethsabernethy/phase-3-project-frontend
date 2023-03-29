import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

function TaskList({list, onDeleteList, onUpdateListImportance, onUpdateListUrgency}){
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
    }

    function handleChangeOfUrgency(){
    fetch(`http://localhost:9292/task-lists/urgency/${list.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        urgent: !list.urgent,
      }),
    })
      .then((resp) => resp.json())
      .then((updatedList) => onUpdateListUrgency(updatedList));
    }

    function handleDeleteTask(deletedTask){
        const updatedTasks= tasks.filter((task) => task.id !== deletedTask.id);
        setTasks(updatedTasks);
    }

    function handleTaskImportanceChange(updatedTask){
        const updatedTasks = tasks.map((task) => {
            if (task.id === updatedTask.id) {
              return updatedTask;
            } else {
              return task;
            }
          });
          setTasks(updatedTasks)
    }

    function handleTaskUrgencyChange(updatedTask){
        const updatedTasks = tasks.map((task) => {
            if (task.id === updatedTask.id) {
              return updatedTask;
            } else {
              return task;
            }
          });
          setTasks(updatedTasks)
    }

    function handleTaskCompletion(updatedTask){
        const updatedTasks = tasks.map((task) => {
            if (task.id === updatedTask.id) {
              return updatedTask;
            } else {
              return task;
            }
          });
          setTasks(updatedTasks)
    }

    return(
        <div className="task_list">
            <h2>{list.name}</h2>
            <label>
                Important
                <input 
                type="checkbox" 
                checked={list.important}
                onChange={handleChangeOfImportance}>
                </input>
            </label>
            <label>
                Urgent
                <input 
                type="checkbox"
                checked={list.urgent}
                onChange={handleChangeOfUrgency}>
                </input>
            </label>
            <button onClick={handleDelete}>🗑️</button>
            <button onClick={handleEdit}>✏️</button>
            <TaskForm onAddNewTask={handleNewTask} list_id={list.id}/>
            {typeof tasks !== "undefined" ? tasks.map((task)=>{
                return <Task task={task} 
                onDeleteTask={handleDeleteTask} 
                onUpdateTaskImportance={handleTaskImportanceChange}
                onUpdateTaskUrgency={handleTaskUrgencyChange}
                onUpdateTaskCompletion={handleTaskCompletion}
                key={task.id}/>
            }): null} 
        </div>
    )
}

export default TaskList;