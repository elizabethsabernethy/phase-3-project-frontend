import React from "react";

function EditListName({name}){

    function handleChange(e){
        console.log(e.target.value)
    }

    return(
        <form>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

      <button type="submit">Save</button>
        </form>
    )
}

export default EditListName;