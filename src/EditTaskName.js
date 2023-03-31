import React, { useState } from "react";

function EditTaskName({task, onNameChange}){
  const[taskName, setTaskName]=useState('')

    function handleSave(e){
      e.preventDefault();
      fetch(`http://localhost:9292/tasks/name/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: taskName,
      }),
    })
      .then((resp) => resp.json())
      .then((updatedTask) => onNameChange(updatedTask));
    }

    
    function handleChange(e){
      setTaskName(e.target.value)
    }

    return(
        <form onSubmit={handleSave}>
        <input
          type="text"
          name={task.name}
          defaultValue={task.name}
          onChange={handleChange}
        />

      <button type="submit">Save</button>
        </form>
    )
}

export default EditTaskName;