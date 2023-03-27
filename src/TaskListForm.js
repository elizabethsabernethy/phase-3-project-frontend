import React, { useState } from "react";

function TaskListForm({onAddNewList}){

    const[listName, setListName]=useState("")

    function handleSubmit(e) {
        e.preventDefault();
        onAddNewList(listName)
        setListName('')
    }

    function handleChange(e){
        setListName(e.target.value)
    }

    return(
    <form className="NewList" onSubmit={handleSubmit}>
      <label>
        New List:
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