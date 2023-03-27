import React from "react";

function TaskListForm(){

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e){
        console.log(e.target.value)
    }

    return(
    <form className="NewList" onSubmit={handleSubmit}>
      <label>
        List Name:
        <input
          type="text"
          name="name"
        //   value={name}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add List</button>
    </form>
    )
}

export default TaskListForm;