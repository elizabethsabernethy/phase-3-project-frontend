import React from "react";

function Task({list}){
    return(
        <div>
            <h2>{list}</h2>
            <button>🗑️</button>
            <button>✏️</button>
        </div>
    )
}

export default Task;