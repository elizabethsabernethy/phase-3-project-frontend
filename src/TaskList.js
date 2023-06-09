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

    function handleEditing(){
      if(list.complete){
        alert('Cannot alter completed task')
      }
      else{
        setEditing(true)
      }
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
      if(list.complete){
        alert('Cannot alter completed task')
      }
      else{
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
  }

    function handleChangeOfUrgency(){
      if(list.complete){
        alert('Cannot alter completed task')
      }
      else{
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
  }

    function handleDeleteTask(deletedTask){
        const updatedTasks= tasks.filter((task) => task.id !== deletedTask.id);
        setTasks(updatedTasks);
    }

    function handleTaskChanges(updatedTask){
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

    const sortedImportantTasks = tasks.sort((a,b)=>{
      return b.important - a.important
    })

    const sortedUrgentTasks = sortedImportantTasks.sort((a,b)=>{
      return b.urgent - a.urgent
    })

    const sortedTasks = sortedUrgentTasks.sort((a,b)=>{
      return a.complete - b.complete
    })

    return(
        <div className="list-container" style={list.urgent && !list.complete ? {borderColor:'red'} : null}>
          <div className="list-title-container" style={list.important && !list.complete ? {color:'red'} : null}>
            <div className="list-name-display">
               {!editing ? <h2>{list.name}</h2> : <EditName list={list} onNameChange={handleNameChange}/>}
            </div>
            <div className="list-button-container">
              <button onClick={handleEditing}>✏️</button>
              <button onClick={handleDelete}>🗑️</button>
            </div>
            <div className="list-checkbox-container">
              <label>
                IMPORTANT
                <input 
                type="checkbox" 
                checked={list.important}
                onChange={handleChangeOfImportance}>
                </input>
            </label>
            <label>
                URGENT
                <input 
                type="checkbox"
                checked={list.urgent}
                onChange={handleChangeOfUrgency}>
                </input>
            </label>
            </div>
          </div>
          <div className="in-list-task-container">
            <div className="task-form-div">
              <TaskForm onAddNewTask={handleNewTask} list_id={list.id}/>
            </div>
            <div className="show-button-div">
              <button onClick={handleShowTasks}>{showTasks ? 'Show All' : 'Hide All'}</button>
            </div>
          </div>
            <div className="task-container" hidden={showTasks ? true : false}>
               {typeof tasks !== "undefined" ? sortedTasks.map((task)=>{
                return <Task task={task} 
                onDeleteTask={handleDeleteTask} 
                onUpdateTaskImportance={handleTaskChanges}
                onUpdateTaskUrgency={handleTaskChanges}
                onUpdateTaskCompletion={handleTaskChanges}
                handleTaskNameChange={handleTaskChanges}
                key={task.id}
                />
            }): null} 
          </div>
        </div>
    )
}

export default TaskList;