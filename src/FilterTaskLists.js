import React, { useState } from "react";

function FilterTaskLists({filterLists, getImportant}){
    const[importantChecked, setImportantChecked] = useState(false)
    const[urgentChecked, setUrgentChecked] = useState(false)

    function handleSearchTasks(e){
        filterLists(e.target.value)
    }

    function handleFilterImportant(){
        setImportantChecked((importantChecked)=> !importantChecked)
    }

    function handleFilterUrgent(){
        setUrgentChecked((urgentChecked)=> !urgentChecked)
    }

    function sendImportant(){
        handleFilterImportant()
        getImportant(importantChecked)
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
                type="checkbox"
                onChange={sendImportant}
                checked={importantChecked}>
                </input>
            </label>
            <label>
                Filter: Urgent
                <input 
                type="checkbox"
                onChange={handleFilterUrgent}
                checked={urgentChecked}>
                </input>
            </label>
      </div>
    )
}

export default FilterTaskLists;