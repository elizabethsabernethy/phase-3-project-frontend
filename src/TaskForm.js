import React, { useState } from "react";

function TaskForm({onAddNewTask}){

    const[taskName, setTaskName]=useState("")

    function handleSubmit(e) {
        e.preventDefault();
        onAddNewTask(taskName)
        setTaskName('')
    }

    function handleChange(e){
        setTaskName(e.target.value)
    }

    return(
    <form className="new_task" onSubmit={handleSubmit}>
      <label>
        New Task:
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