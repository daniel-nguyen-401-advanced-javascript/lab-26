import React, {useState, useEffect, useContext} from 'react';
import {ListContext} from './Contexts';


function ListDisplay(props) {
  const displayData = useContext(ListContext);

  const [page, setPage] = useState(0);
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    let renderedList = [];

    let i = 0 + page * displayData.displayCount;
    let max = i + displayData.displayCount;

    for (i; i<max; i++) {
      if (i >= props.list.length) break;
      renderedList.push(<div key={i}>{props.list[i]}</div>);
    }

    setDisplayItems(renderedList);
  }, [props.list, page, displayData.displayCount]);

  return (
    <>
    {displayItems}
    {page * displayData.displayCount < props.list.length && (
      <button className='next'
      onClick={(e) => {
        setPage(page +1);
      }}
      >Next</button>
    )}
    {page > 0 && (
      <button className='previous'
      onClick={(e) => {
        setPage(page -1);
      }}
      >Previous</button>
    )}
    </>
  );
}

export default ListDisplay;
