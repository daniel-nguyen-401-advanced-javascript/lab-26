import React, { useState } from 'react';

function ToDoForm(props) {

  const [description, setDescription] = useState(); 
  const [assigned, setAssigned] = useState();
  const [status, setStatus] = useState(false);
  const [difficulty, setDifficulty] = useState(3);
  

  //list of tasks in array?

  //create object with form items
  
  //pass in setlist fn from todo to call in submit fn

  function makeList(e) {
    //stuff happens here
  
    let task = {
      description,
      assigned,
      status,
      difficulty
    }

    props.makeList([...props.currentList, task]);
  }

  return (
    <>
      <div className="ToDoForm">
        <form>
        <label className='task-control'>Task Description:</label>
        <br />
        <input
          type='text'
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          />
          <br />
        <label className='assigned-control'>Assigned To:</label>
        <br />
        <input
        type='text'
        value={assigned}
        onChange={(e) => {
          setAssigned(e.target.value);
        }}
        />
        <br />
        <label className='difficulty-control'>Difficulty (1 to 5)</label>
        <input
        type='number'
        min={0}
        max={5}
        value={difficulty}
        onChange={(e) => {
          setDifficulty(e.target.value);
        }}
        />
        <br />
        <label className='status-control'>Status:</label>
        <input
        type='checkbox'
        checked={status}
        onChange={() => {
          setStatus(!status);
        }}
        />
        <br />
        <button type="button" onClick={makeList}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default ToDoForm;