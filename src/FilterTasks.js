import React, { useState } from "react";

function FilterTasks({tasks, setTasksToShow, tasksToShow}){
    const[showCompleted, setShowCompleted] = useState(true)

    const completedTasksToDisplay = tasks.filter((task) => {
        if (task.completed) {
        return task;
        }
        return false;
      })

    function handleCompletedFilter(){
        setTasksToShow(completedTasksToDisplay);
        setShowCompleted((showCompleted)=>!showCompleted)    
    }

    function handleShowAllTasks(){
        setTasksToShow(tasks);
        setShowCompleted((showCompleted)=>!showCompleted)
    }

    function toggleCompletedTasks(){
        if(tasksToShow === tasks){
            handleCompletedFilter();
        }
        else{
            handleShowAllTasks();
        }
    }

    return(
       <button onClick={toggleCompletedTasks}>{showCompleted ? "Hide Completed Tasks" : "Show Completed Tasks"}</button>
    )
}

export default FilterTasks;