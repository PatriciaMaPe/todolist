import React from 'react';
import {Counter} from './Counter';
import {Search} from './Search';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  { key: 1, text: "Prepare lunch box", completed: false },
  { key: 2, text: "Finish project", completed: false },
  { key: 3, text: "Study french", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;
  var todosToDisplay = todos;

  if(searchValue.length >= 1){
    console.log('search');
    todosToDisplay = todos.filter(todo => {
      const text = todo.text.toLowerCase();
      const search = searchValue.toLowerCase();
      return text.includes(search);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const updatedTodos = [...todos];
    updatedTodos[todoIndex].completed = true;
    setTodos(updatedTodos);
  }

  const deleteTodo = (text) => {
    const updatedTodos = todos.filter((todo) => todo.text !== text);
    setTodos(updatedTodos);
  };



  return (
    <React.Fragment>
      <Counter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      ></Counter>

      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></Search>

      <TodoList>
        {todosToDisplay.map((todo) => (
          <TodoItem
            key={todo.key}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          ></TodoItem>
        ))}
      </TodoList>
      <CreateTodoButton>+</CreateTodoButton>
    </React.Fragment>
  );
}

export default App;
