# Context API - Lab 28

n this lab, you will be extending your ToDo application to share data using contexts. The data will act like “settings” upon the application.
    
## Links
    
- [CodeSandbox](https://codesandbox.io/s/condescending-bush-uejsk) 
    
## Challenge
    
Your ToDo application should have the following features:

* You should have a settings component that lets users toggle the following features:
  * The maximum number of items on the screen, causing pagination if number of tasks exceeds this
  * Whether to show or hide tasks that have the status “complete”

* Tasks should be persisted across page reloads through the use of an API, either your own or the provided 401 API server - See API documentation here
  * Note that when using the provided server, there may be multiple students changing the saved database tasks.

* Users should be able to delete existing tasks by clicking a “delete” button on each task item.
* Users should have access to a form where a new ToDo task can be added. This form should have the following fields:
  * Task Description / Text
  * Assigned To
  * Status (complete or incomplete)
  * Difficulty (a number between 1 and 5)

* When users submit their new task form, they should see their task appear in a list of current tasks. This list should allow you to select any task to toggle it from complete to incomplete or vice versa.
* The title on the browser tab should update to show the number of incomplete tasks. For example, the title could read “4 Incomplete ToDo Items” or something similar.
    
## Testing Instructions
    

## UML
![lab-26-uml](https://github.com/daniel-nguyen-401-advanced-javascript/lab-26/blob/lab-setup/src/assets/lab-26-uml.png)
