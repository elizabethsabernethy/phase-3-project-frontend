import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import EditName from "./EditName";

function TaskList({list, onDeleteList, onUpdateListImportance, onUpdateListUrgency, handleListNameUpdate}){
    const[tasks, setTasks] = useState(list.tasks) 
    const[showTasks, setShowTasks] = useState(false)
    const[editing, setEditing]=useState(false) 
    
    function handleNameChange(updatedList){
      handleListNameUpdate(updatedList)
      setEditing(false)
    }

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

    function handleTaskNameChange(updatedTask){
      const updatedTasks = tasks.map((task) => {
        if (task.id === updatedTask.id) {
          return updatedTask;
        } else {
          return task;
        }
      });
      setTasks(updatedTasks)
    }

    function handleShowTasks(){
      setShowTasks((showTasks) => !showTasks)
    }

    return(
        <div className="task_list">
          {!editing ? <h2>{list.name}</h2> : <EditName list={list} onNameChange={handleNameChange}/>}
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
            <button onClick={()=> setEditing(true)}>✏️</button>
            <button onClick={handleShowTasks}>{showTasks ? 'Show Tasks' : 'Hide Tasks'}</button>
            <div hidden={showTasks ? true : false}>
            <TaskForm onAddNewTask={handleNewTask} list_id={list.id}/>
               {typeof tasks !== "undefined" ? tasks.map((task)=>{
                return <Task task={task} 
                onDeleteTask={handleDeleteTask} 
                onUpdateTaskImportance={handleTaskImportanceChange}
                onUpdateTaskUrgency={handleTaskUrgencyChange}
                onUpdateTaskCompletion={handleTaskCompletion}
                handleTaskNameChange={handleTaskNameChange}
                key={task.id}/>
            }): null} 
            </div>
           
        </div>
    )
}

export default TaskList;