import React, {useState} from 'react';

function ToDoItem(props) {

const [done, setDone] = useState(props.item.status);

  return (
    <>
    <div className="ToDoItem">
    <p className="title">Task:</p>
    <p className="description">{props.item.description}</p>
    <p>Assigned:</p>
    <p>{props.item.assigned}</p>
    <p>Difficulty:</p>
    <p>{props.item.difficulty}</p>
    <label>Status:</label>
    <input type="checkbox" checked={done} onChange={() => { setDone(!done) }}/>

    </div>
    </>
  )
}

export default ToDoItem;