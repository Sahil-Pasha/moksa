import React from "react";
import styled from "@emotion/styled";
import Task from "./Task";
import AddTaskForm from "./AddTaskForm";

const ColumnContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-right: 20px;
  width: 300px;
`;

const Column = ({ status, tasks, onAddTask }) => {
  return (
    <ColumnContainer>
      <h2>{status}</h2>
      <AddTaskForm onAddTask={onAddTask} status={status} />
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ColumnContainer>
  );
};

export default Column;
