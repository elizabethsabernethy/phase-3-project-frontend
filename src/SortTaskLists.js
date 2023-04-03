import React from "react";

function SortTaskLists(){
    return(
        <div>
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

export default SortTaskLists;