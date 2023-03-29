import React, { useEffect, useState } from "react";
import TaskListForm from "./TaskListForm";
import TaskList from "./TaskList";

function TaskListContainer(){
    const[lists, setLists]=useState([])

    useEffect(()=>{
        fetch('http://localhost:9292/task-lists')
        .then((resp)=>resp.json())
        .then((task_lists)=>setLists(task_lists)) // <--- console logs twice? 
        // When ^ uses setLists, app throws error about objects not being react children?
    },[])

    function handleNewList(newList){
        setLists([...lists, newList])
    }

    return(
        <div>
            <TaskListForm onAddNewList={handleNewList}/>
            <ul className="task_list_list">
                {lists.map((list)=>{
                    return <TaskList list={list} key={list.id}/>
                })}
            </ul>
        </div>
    )
}

export default TaskListContainer;