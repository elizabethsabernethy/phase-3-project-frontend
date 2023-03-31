import React, { useState } from "react";

function EditName({list, onNameChange}){
  const[listName, setListName]=useState(list.name)

    function handleSave(e){
      e.preventDefault();
      fetch(`http://localhost:9292/task-lists/name/${list.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: listName,
      }),
    })
      .then((resp) => resp.json())
      .then((updatedList) => onNameChange(updatedList));
    }

    
    function handleChange(e){
      setListName(e.target.value)
    }

    return(
        <form onSubmit={handleSave}>
        <input
          type="text"
          name={list.name}
          defaultValue={list.name}
          onChange={handleChange}
        />

      <button type="submit">Save</button>
        </form>
    )
}

export default EditName;