import React from 'react';
import '../componentStyle/TodoItem.css'

function TodoItem(props){

  return (
    <li className="TodoItem">
      <button className="Icon" onClick={props.onComplete}>
        C
      </button>
      <p className={`Item-color ${props.completed && "Item-completed"}`}>
        {props.text}
      </p>
      <span onClick={props.onDelete}>X</span>
    </li>
  );
}

export {TodoItem};