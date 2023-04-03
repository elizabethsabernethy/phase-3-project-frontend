import React from "react";

function FilterTaskLists({filterLists}){

    function handleSearchTasks(e){
        filterLists(e.target.value)
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
            <label>
                Filter: Important
                <input 
                type="checkbox">
                </input>
            </label>
            <label>
                Filter: Urgent
                <input 
                type="checkbox">
                </input>
            </label>
      </div>
    )
}

export default FilterTaskLists;