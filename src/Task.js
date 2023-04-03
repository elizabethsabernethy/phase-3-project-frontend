import React, { useState } from "react";
import EditTaskName from "./EditTaskName";

function Task({task, onDeleteTask, onUpdateTaskImportance, onUpdateTaskUrgency, onUpdateTaskCompletion, handleTaskNameChange}){
  const[editing, setEditing] = useState(false)


    function handleDelete(){
     fetch(`http://localhost:9292/tasks/${task.id}`, {
          method: "DELETE",
          })
            .then((resp) => resp.json())
            .then(() => onDeleteTask(task));
    }

    function handleChangeOfImportance(){
        fetch(`http://localhost:9292/tasks/importance/${task.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            important: !task.important,
          }),
        })
          .then((resp) => resp.json())
          .then((updatedTask) => onUpdateTaskImportance(updatedTask));
        }
    
        function handleChangeOfUrgency(){
        fetch(`http://localhost:9292/tasks/urgency/${task.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            urgent: !task.urgent,
          }),
        })
          .then((resp) => resp.json())
          .then((updatedTask) => onUpdateTaskUrgency(updatedTask));
        }

    function handleComplete(){
        fetch(`http://localhost:9292/tasks/complete/${task.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            complete: !task.complete,
          }),
        })
          .then((resp) => resp.json())
          .then((updatedTask) => onUpdateTaskCompletion(updatedTask));
    }

    function handleNameChange(updatedTask){
      handleTaskNameChange(updatedTask)
      setEditing(false)
  }

    return(
        <div className="task">
          <div className="task-name">
            {!editing ? <h4 style={task.complete ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : null}>{task.name}</h4> : <EditTaskName task={task} onNameChange={handleNameChange}/>}
          </div>
            <div className="task-buttons">
              <div className="task-checkboxes">
              <label>
                  <input 
                  type="checkbox" 
                  checked={task.important}
                  onChange={handleChangeOfImportance}>
                  </input>
                  IMPORTANT
              </label>
              <label>
                  <input 
                  type="checkbox"
                  checked={task.urgent}
                  onChange={handleChangeOfUrgency}>
                  </input>
                  URGENT
              </label>
            </div> 
              <button onClick={handleComplete}>✅</button>
              <button onClick={()=> setEditing(true)}>✏️</button>
              <button onClick={handleDelete}>🗑️</button>
            </div>     
        </div>
    )
}

export default Task;