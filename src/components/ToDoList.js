import React from 'react';
import ToDoItem from "./ToDoItem";

function ToDoList(props) {

  let currentList = [];

  props.currentList.forEach( (item, i) => {

    currentList.push(<ToDoItem item={item} key={i} />);

    });
  return (
    <>
    <div className="ToDoList">
    {currentList}
    </div>
    </>
  )
}

export default ToDoList;
