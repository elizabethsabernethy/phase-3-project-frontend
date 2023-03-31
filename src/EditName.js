import React from "react";

function EditName({name}){

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

export default EditName;