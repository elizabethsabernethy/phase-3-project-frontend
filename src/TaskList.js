import React from "react";

function Task({list}){

    function handleDelete(){
        console.log('deleted')
    }

    function handleEdit(){
        console.log("edited")
    }

    return(
        <div>
            <h2>{list}</h2>
            <button onClick={handleDelete}>🗑️</button>
            <button onClick={handleEdit}>✏️</button>
        </div>
    )
}

export default Task;