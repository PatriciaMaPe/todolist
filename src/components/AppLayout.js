import React from 'react';
import { TodoContext } from './TodoContext';
import { Counter } from './Counter';
import { Search } from './Search';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


function AppLayout() {
    const { loading,
        error,
        todosToDisplay,
        completeTodo,
        deleteTodo } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <Counter />

            <Search />

            <TodoList>
                {loading && <p>Loading todos...</p>}
                {error && <p>Error loading todos.</p>}
                {!loading && todosToDisplay.length == 0 && <p>No todos found</p>}
                {todosToDisplay.map((todo) => (
                    <TodoItem
                        key={todo.key}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton>+</CreateTodoButton>
        </React.Fragment>);
}

export { AppLayout };