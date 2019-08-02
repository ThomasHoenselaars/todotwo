import React, { useState } from "react";
import "./App.css";

import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "React leren",
      isCompleted: false
    },
    {
      text: "Angi site aanpassen",
      isCompleted: false
    },
    {
      text: "Bijna weekend",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    if (!newTodos[index].isCompleted) {
      newTodos[index].isCompleted = true;
    } else {
      newTodos[index].isCompleted = false;
    }
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
