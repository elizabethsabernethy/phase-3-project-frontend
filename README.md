# Phase 3 Final Project: Task Manager

This project utilized create-react-app to structure a basic react website, from which I adjusted to meet the specific paramters for the app I wanted to create. I also forked and cloned a backend Ruby repository from the Flatiron school (https://github.com/learn-co-curriculum/phase-3-sinatra-react-project) and added the required migrations and request routes in the application controller to allow an easy connection between the frontend and backend. Function based components are the primary features of react which this app uses to create functionality. The backend utilizes Sinatra and Active Record to create optimal functionality.  

## Purpose of Project

The purpose of this website is to act as a task manager. Essentially, users can add task-lists and add tasks to a specific task-list. Both task-lists and tasks have a name, and button to edit the name, a checkbox to toggle importance, a checkbox to toggle urgency, and a delete button. Tasks also additonally have a complete button. The website has an add task-list form, and a search bar to search for task-lists based on name. Individual task-lists each have an add task form, and a button to hide/show all tasks. 

When a user first enters the website, they will see the Task Manager homepage, which should display the header "Task Manager", then task-list form to add lists, and the search bar. 

![search gif](https://imgur.com/NOrsr5E.gif)

The website may or may not have preloaded lists depending on whether a user has previosuly added a list. 

Task-lists are broken down into 3 main sections, the title section, the add task section, and the tasks section. The title section displays the name of the task-list, an edit button for the name of the list, a delete button, which deletes the list and all contained tasks, and two checkboxes to denote importance and/or urgency. 
The next section has a form which adds tasks to the list, and a button to hide tasks, or show them if they've been previously hidden. 

![add task gif](https://imgur.com/v6pgdEq.gif)

The last section houses all of the tasks for that particular task-list. 

Each task, as mentioned previously, has a similar structure and functionality to task-lists. A task has a name, an edit name button, a delete button, and two checkboxes to denote importance/urgency. It also has the addition of a button to mark a task as complete. 

Both tasks, and task-list are added to the page in ascending order of creation, with the newest task or list appearing at the bottom. However, through the use of the important/ urgent checkboxes, tasks and lists are auto sorted to the top of the order. Urgent AND important tasks/lists are most significant, thus they will appear at the top, with ONLY urgent next, followed by ONLY important, and finally tasks/lists that are neither. Tasks also have the additonal sorting of moving completed tasks to the bottom of the list. 

Another unique feature of task manager is that when a task and/or list is marked as urgent, the border of the container turns red. Additonally, if something is marked as important, the name of the task or list turns red. 

# Sources/ References

Backend Repo: https://github.com/elizabethsabernethy/phase-3-project-backend

Youtube Walk-through: https://youtu.be/exaogYbzFq0
