import React from "react";
import '../componentStyle/CreateTodoButton.css'

function CreateTodoButton(props) {
  const onClickCreateTodo = () => {
    console.log('click');
  }

  return (
    <button className="CreateTodoButton" onClick={onClickCreateTodo}>
      +
    </button>
  );
}

export { CreateTodoButton };
