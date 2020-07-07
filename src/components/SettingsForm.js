import React, {useContext} from 'react';
import {ListContext} from "./Contexts";

function SettingsForm(props) {
  let listData = useContext(ListContext);
  return (
    <>
    <div className='SettingsForm'>
    <label>Display Count</label><br />
    <input 
      type='number'
      value={listData.displayCount}
      onChange={(e) =>{
        listData.setDisplayCount(parseInt(e.target.value));
      }}
      />
    </div>
    </>
  )
}

export default SettingsForm;