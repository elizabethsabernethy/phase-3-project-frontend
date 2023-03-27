import React, { useState } from "react";

function TaskListForm(){

    const[listName, setListName]=useState("")

    function handleSubmit(e) {
        e.preventDefault();
        console.log(listName)
    }

    function handleChange(e){
        setListName(e.target.value)
    }

    return(
    <form className="NewList" onSubmit={handleSubmit}>
      <label>
        List Name:
        <input
          type="text"
          name="name"
          value={listName}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add List</button>
    </form>
    )
}

export default TaskListForm;