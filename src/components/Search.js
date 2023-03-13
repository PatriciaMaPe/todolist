import React from 'react';
import '../componentStyle/Search.css'
import { TodoContext } from './TodoContext';

function Search(){
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  
  const searchValueOnChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return <input placeholder="project" value={searchValue} onChange={searchValueOnChange}></input>;
}

export {Search};