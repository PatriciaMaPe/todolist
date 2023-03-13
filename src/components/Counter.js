import React from 'react'
import "../componentStyle/Counter.css";
import { TodoContext } from './TodoContext';

function Counter(){
  const {totalTodos, completedTodos} = React.useContext(TodoContext)
  return (
    <h2>
      Completed tasks: {completedTodos}/{totalTodos}
    </h2>
  );
}

export {Counter}