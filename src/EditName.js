import React, { useState } from "react";

function EditName({list}){
  const{listName, setListName}=useState(list.name)

    function handleChange(e){
        setListName(e.target.value)
    }

    function handleSave(){
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
      .then((updatedName) => console.log(updatedName));
    }

    return(
        <form>
        <input
          type="text"
          name={list.name}
          defaultValue={list.name}
          onChange={handleChange}
        />

      <button onClick={handleSave} type="submit">Save</button>
        </form>
    )
}

export default EditName;