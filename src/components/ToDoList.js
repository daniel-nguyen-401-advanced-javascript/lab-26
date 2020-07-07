import React from 'react';
import ListDisplay from './ListDisplay';
import ToDoItem from "./ToDoItem";


function ToDoList(props) {


  let currentList = [];

  if (props.tasks)
    for (let i = 0; i < props.tasks.length; i++) {
      currentList.push(
        <ToDoItem
          key={i}
          indx={i}
          data={props.tasks[i]}
          deleteTask={props.deleteTask}
          modifyTask={props.modifyTask}
        />,
      );
    }
  return (
  
    <div className="ToDoList">
      <h2>Tasks</h2>
      <ListDisplay list={currentList}/>
    {/* {currentList} */}
    </div>
   
  )
}


export default ToDoList;
