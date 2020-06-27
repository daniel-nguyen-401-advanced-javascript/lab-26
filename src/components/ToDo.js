
import React, { useState, useEffect } from 'react';
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

function ToDo(props) {

  const [list, setList] = useState([]);

  useEffect(() =>{
    let str = `${list.length} Remaining Task`;
    if(list.length !==1) {
      str += 's';
    }

    document.title = str;
  }, [list])

  return (
    <>
    <div className="ToDo">
    <ToDoForm makeList={setList} currentList={list}/>
    <ToDoList currentList={list}/>
    </div>
    </>
  )
}

export default ToDo;

//maintain form and list