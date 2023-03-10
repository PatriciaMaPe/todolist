import React from 'react';
import './Search.css'

function Search({searchValue, setSearchValue}){
  const searchValueOnChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return <input placeholder="project" value={searchValue} onChange={searchValueOnChange}></input>;
}

export {Search};