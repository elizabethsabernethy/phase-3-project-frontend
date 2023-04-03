import React, { useState } from "react";

function TaskListForm({onAddNewList}){

    const[listName, setListName]=useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/task-lists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: listName,
            important: false,
            urgent: false,
            complete: false
          }
          ),
        })
          .then((resp) => resp.json())
          .then((newList) => {
            onAddNewList(newList);
            setListName("");
          });
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
          required
        />
      </label>

      <button type="submit">Add List</button>
    </form>
    )
}

export default TaskListForm;