import React from 'react';
import { UseLocalStorage } from './UseLocalStorage';

// { Provider, Consumer }
const TodoContext = React.createContext();

function TodoProvider(props) {
    const { item: todos, saveItem: saveTodos, loading, error } = UseLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter(todo => todo.completed === true).length;
    const totalTodos = todos.length;
    var todosToDisplay = todos;

    if (searchValue.length >= 1) {
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
        saveTodos(updatedTodos);
    }

    const deleteTodo = (text) => {
        const updatedTodos = todos.filter((todo) => todo.text !== text);
        saveTodos(updatedTodos);
    };

    return (<TodoContext.Provider value={{
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        todosToDisplay,
        completeTodo,
        deleteTodo,
        loading,
        error,
    }}>{[props.children]}</TodoContext.Provider>)
}

export { TodoContext, TodoProvider };