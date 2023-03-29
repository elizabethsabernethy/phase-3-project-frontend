import React, { useState } from "react";

function Task({task, onDeleteTask, onUpdateTaskImportance, onUpdateTaskUrgency, onUpdateTaskCompletion}){

    function handleDelete(){
     fetch(`http://localhost:9292/tasks/${task.id}`, {
          method: "DELETE",
          })
            .then((resp) => resp.json())
            .then(() => onDeleteTask(task));
    }

    function handleChangeOfImportance(){
        fetch(`http://localhost:9292/tasks/importance/${task.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            important: !task.important,
          }),
        })
          .then((resp) => resp.json())
          .then((updatedTask) => onUpdateTaskImportance(updatedTask));
        }
    
        function handleChangeOfUrgency(){
        fetch(`http://localhost:9292/tasks/urgency/${task.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            urgent: !task.urgent,
          }),
        })
          .then((resp) => resp.json())
          .then((updatedTask) => onUpdateTaskUrgency(updatedTask));
        }

    function handleEdit(){
        console.log('Edited')
    }

    function handleComplete(){
        fetch(`http://localhost:9292/tasks/complete/${task.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            complete: !task.complete,
          }),
        })
          .then((resp) => resp.json())
          .then((updatedTask) => onUpdateTaskCompletion(updatedTask));
    }

    return(
        <div>
            <h4 style={task.complete ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : null}>{task.name}</h4>
            <label>
                Important
                <input 
                type="checkbox" 
                checked={task.important}
                onChange={handleChangeOfImportance}>
                </input>
            </label>
            <label>
                Urgent
                <input 
                type="checkbox"
                checked={task.urgent}
                onChange={handleChangeOfUrgency}>
                </input>
            </label>
            <button onClick={handleDelete}>🗑️</button>
            <button onClick={handleEdit}>✏️</button>
            <button onClick={handleComplete}>✅</button>
        </div>
    )
}

export default Task;