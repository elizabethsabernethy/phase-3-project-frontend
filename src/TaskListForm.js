import React from "react";

function TaskListForm(){

    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
    <form className="NewList" onSubmit={handleSubmit}>
      <label>
        List Name:
        <input
          type="text"
          name="name"
        //   value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <button type="submit">Add List</button>
    </form>
    )
}

export default TaskListForm;