import React, { useState } from "react";

function FilterTaskLists({filterLists}){
    const[importantChecked, setImportantChecked] = useState(false)
    const[urgentChecked, setUrgentChecked] = useState(false)

    function handleSearchTasks(e){
        filterLists(e.target.value)
    }

    function handleFilterImportant(){
        setImportantChecked((importantChecked)=>!importantChecked)
// Set important => !important
//filter through list.important and reutrn said lists
//if !importantChecked then show all lists, but if it is checked then show only list.important = true
    }

    function handleFilterUrgent(){
        setUrgentChecked((urgentChecked)=>!urgentChecked)
// Set urgent => !urgent
//filter through list.urgent and reutrn said lists
//if !urgentChecked then show all lists, but if it is checked then show only list.urgent = true
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
                name="important"
                onChange={handleFilterImportant}
                checked={importantChecked}>
                </input>
            </label>
            <label>
                Filter: Urgent
                <input 
                type="checkbox"
                name="urgent"
                onChange={handleFilterUrgent}
                checked={urgentChecked}>
                </input>
            </label>
      </div>
    )
}

export default FilterTaskLists;