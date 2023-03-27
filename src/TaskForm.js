import React, { useState } from "react";

function TaskForm(){

    const[taskName, setTaskName]=useState("")

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e){
        setTaskName(e.target.value)
    }

    return(
    <form className="new_task" onSubmit={handleSubmit}>
      <label>
        Task:
        <input
          type="text"
          name="name"
          value={taskName}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add Task</button>
    </form>
    )
}

export default TaskForm;