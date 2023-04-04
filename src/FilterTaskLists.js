import React, { useState } from "react";

function FilterTaskLists({filterLists, lists, setListsToDisplay, listsToDisplay}){
    const[importantChecked, setImportantChecked] = useState(false)
    const[urgentChecked, setUrgentChecked] = useState(false)

    function handleSearchTasks(e){
        filterLists(e.target.value)
    }

    const importantListsToDisplay = lists.filter((list) => {
        if (list.important) {
        return list;
        }
        return false;
      })

     function toggleImportantLists(){
        if(listsToDisplay === lists){
            setListsToDisplay(importantListsToDisplay);
        }
        else {
            setListsToDisplay(lists);
        }
        setImportantChecked(importantChecked => !importantChecked)
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
                onChange={toggleImportantLists}
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