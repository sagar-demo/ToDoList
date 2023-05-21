import React from "react";

const TodoItem = ({ todo, editTodo }) => {
  const handleEdit = () => {
    editTodo(todo);
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default TodoItem;
