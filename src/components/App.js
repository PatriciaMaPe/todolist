import React from 'react';
import { AppLayout } from './AppLayout'
import { TodoProvider } from './TodoContext';
import '../componentStyle/App.css';

/*const todosExample = [
  { key: 1, text: "Prepare lunch box", completed: false },
  { key: 2, text: "Finish project", completed: false },
  { key: 3, text: "Study french", completed: true },
];*/


function App() {

  return (
    <TodoProvider>
      <AppLayout/>
    </TodoProvider>
  );
}

export default App;
