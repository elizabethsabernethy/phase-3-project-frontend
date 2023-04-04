import React, { useEffect, useState } from "react";
import TaskListForm from "./TaskListForm";
import TaskList from "./TaskList";
import FilterTaskLists from "./FilterTaskLists";

function TaskListContainer(){
    const[lists, setLists] = useState([])
    const[filteredList, setFilteredList] = useState('')

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

    function filterLists(input){
      setFilteredList(input)
    }

    function handleImportantFilter(important){
      console.log(important)
    }

    
    const listsToShow = listsToDisplay.filter((list)=>{
      return ((list.name).toLowerCase()).match(filteredList.toLowerCase());
    })

    return(
        <div className="task-lists-container">
          <div className="task-list-form-div">
            <TaskListForm onAddNewList={handleNewList}/>
          </div>
          <div className="filter-task-lists-div">
            <FilterTaskLists filterLists={filterLists} getImportant={handleImportantFilter}/>
          </div>
          <div>
            {listsToShow.map((list)=>{
                    return <TaskList list={list} 
                    onDeleteList={handleDeleteList} 
                    onUpdateListImportance={handleListChanges} 
                    onUpdateListUrgency={handleListChanges}
                    handleListNameUpdate={handleListChanges}
                    key={list.id}/>
                })}
          </div>
        </div>
    )
}

export default TaskListContainer;