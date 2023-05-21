import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./TodoForm.css"; // Import the CSS file

class BnbChainContract {
  constructor() {
    this.todos = [];
  }

  getTodoCount() {
    return this.todos.length;
  }

  getTodoByIndex(index) {
    return this.todos[index];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  updateTodoByIndex(index, updatedTodo) {
    this.todos[index] = updatedTodo;
  }
}

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const bnbChainContract = new BnbChainContract();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todoCount = bnbChainContract.getTodoCount();

        const fetchedTodos = [];
        for (let i = 0; i < todoCount; i++) {
          const todo = bnbChainContract.getTodoByIndex(i);
          fetchedTodos.push(todo);
        }

        setTodos(fetchedTodos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = (newTodo) => {
    bnbChainContract.addTodo(newTodo);
    setTodos([...todos, newTodo]);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[editingIndex] = updatedTodo;

    bnbChainContract.updateTodoByIndex(editingIndex, updatedTodo);

    setTodos(updatedTodos);
    setEditingIndex(-1);
  };

  const cancelEdit = () => {
    setEditingIndex(-1);
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <TodoForm
        addTodo={addTodo}
        updateTodo={updateTodo}
        editingIndex={editingIndex}
        cancelEdit={cancelEdit}
      />
      <TodoList todos={todos} editTodo={editTodo} />
    </div>
  );
};

export default App;
