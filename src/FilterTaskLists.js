import React from "react";

function FilterTaskLists(){

    function handleSearchTasks(e){
        console.log(e.target.value)
    }

    return(
        <div className="searchbar">
            <label htmlFor="search">Search Task-Lists:</label>
            <input
            type="text"
            id="search"
            placeholder="Type a list name to search..."
            onChange={handleSearchTasks}
            />
      </div>
    )
}

export default FilterTaskLists;