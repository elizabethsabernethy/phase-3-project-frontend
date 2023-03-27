import React, { useState } from "react";
import TaskListForm from "./TaskListForm";
import TaskList from "./TaskList";

function TaskListContainer(){
    const[lists, setLists]=useState([])

    function handleNewList(newList){
        setLists(...lists, newList)
    }

    return(
        <div>
            <TaskListForm onAddNewList={handleNewList}/>
            <ul className="TaskList">
                {lists.map((list)=>{
                    <TaskList list={list}/>
                })}
            </ul>
        </div>
    )
}

export default TaskListContainer;