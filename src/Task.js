import React, { useState } from "react";

function Task({task}){
    const[completed, setCompleted]=useState(false)

    function handleDelete(){
        console.log('deleted')
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