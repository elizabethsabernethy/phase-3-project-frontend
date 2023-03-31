import React, { useEffect, useState } from "react";
import TaskListForm from "./TaskListForm";
import TaskList from "./TaskList";

function TaskListContainer(){
    const[lists, setLists]=useState([])

    useEffect(()=>{
        fetch('http://localhost:9292/task-lists')
        .then((resp)=>resp.json())
        .then((task_lists)=>setLists(task_lists)) 
    },[])

    function handleNewList(newList){
        setLists([...lists, newList])
    }

    function handleDeleteList(deletedList) {
        const updatedLists = lists.filter((list) => list.id !== deletedList.id);
        setLists(updatedLists);
      }

    function handleListChanges(updatedList){
      const updatedLists = lists.map((list) => {
        if (list.id === updatedList.id) {
          return updatedList;
        } else {
          return list;
        }
      });
      setLists(updatedLists)
    }

    return(
        <div>
            <TaskListForm onAddNewList={handleNewList}/>
            <ul className="task_list_list">
                {lists.map((list)=>{
                    return <TaskList list={list} 
                    onDeleteList={handleDeleteList} 
                    onUpdateListImportance={handleListChanges} 
                    onUpdateListUrgency={handleListChanges}
                    handleListNameUpdate={handleListChanges}
                    key={list.id}/>
                })}
            </ul>
        </div>
    )
}

export default TaskListContainer;