import React, { useState } from "react";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title,
      description,
      status,
    };
    onAddTask(newTask);
    setTitle("");
    setDescription("");
    setStatus("To Do");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        required
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option placeholder="">Please select the status</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button type="submit">Add Task</button>
    </FormContainer>
  );
};

export default AddTaskForm;
