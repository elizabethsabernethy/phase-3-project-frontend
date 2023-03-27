import React from "react";

function Task({task}){

    function handleDelete(){
        console.log('deleted')
    }

    function handleEdit(){
        console.log('Edited')
    }

    function handleComplete(){
        console.log('completed')
    }
    return(
        <div>
            <h4>{task}</h4>
            <button onClick={handleDelete}>🗑️</button>
            <button onClick={handleEdit}>✏️</button>
            <button onClick={handleComplete}>✅</button>
        </div>
    )
}

export default Task;