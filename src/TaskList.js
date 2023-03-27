import React, { useState } from "react";
import TaskListForm from "./TaskListForm";

function TaskList(){
    const[lists, setLists]=useState([])

    function handleNewList(newList){
        setLists(...lists, newList)
    }

    return(
        <div>
            <TaskListForm onAddNewList={handleNewList}/>
        </div>
    )
}

export default TaskList;