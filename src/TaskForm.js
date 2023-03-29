import React, { useState } from "react";

function TaskForm({onAddNewTask}){

    const[taskName, setTaskName]=useState("")

    function handleSubmit(e) {
      e.preventDefault();
      // fetch("http://localhost:9292/tasks", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     name: taskName,
      //     important: false,
      //     urgent: false,
      //     complete: false,
      //     task_list_id: task_list_id <------- how do i get the correct id?
      //   }
      //   ),
      // })
      //   .then((resp) => resp.json())
      //   .then((newTask) => {
      //     onAddNewTask(newTask);
      //     setTaskName("");
      //   });
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