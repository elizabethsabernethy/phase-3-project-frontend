import React, { useState } from "react";

function Task({task, onDeleteTask}){
    const[completed, setCompleted]=useState(false)

    function handleDelete(){
     fetch(`http://localhost:9292/tasks/${task.id}`, {
          method: "DELETE",
          })
            .then((resp) => resp.json())
            .then(() => onDeleteTask(task));
    }

    function handleEdit(){
        console.log('Edited')
    }

    function handleComplete(){
        setCompleted(completed => !completed)
    }
    return(
        <div>
            <h4 style={completed ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : null}>{task.name}</h4>
            <button onClick={handleDelete}>🗑️</button>
            <button onClick={handleEdit}>✏️</button>
            <button onClick={handleComplete}>✅</button>
        </div>
    )
}

export default Task;