import React, { useState } from "react";
import { Drawer, TextField, Button } from "@material-ui/core";

const EditTodo = ({ todo, onClose }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSave = () => {
    // Add logic to save the updated todo using an API call
    // Then call the onClose function to close the drawer
  };

  return (
    <h1>Hello</h1>
    <Drawer anchor="right" open={true}>
      <TextField label="Title" value={title} onChange={handleTitleChange} />
      <TextField
        label="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Drawer>
  );
};

export default EditTodo;
