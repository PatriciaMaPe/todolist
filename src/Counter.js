import React from 'react'
import "./Counter.css";

function Counter({totalTodos, completedTodos}){
  return (
    <h2>
      Completed tasks: {completedTodos}/{totalTodos}
    </h2>
  );
}

export {Counter}