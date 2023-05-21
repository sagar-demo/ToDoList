import React from "react";

const TodoList = ({ todos, editTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span>{todo.name}</span>
          <span>{todo.description}</span>
          <button onClick={() => editTodo(index)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
