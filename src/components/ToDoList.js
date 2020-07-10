import React , {useContext} from 'react';
import ListDisplay from './ListDisplay';
import ToDoItem from "./ToDoItem";
import {ListContext} from "./Contexts";


function ToDoList(props) {

  const data = useContext(ListContext);

  let currentList = [];

  if (props.tasks)
    for (let i = 0; i < props.tasks.length; i++) {
      if(!data.showCompleted && props.tasks[i].complete)
        continue; 

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
