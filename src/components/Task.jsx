import React from "react";
import styled from "@emotion/styled";

const TaskContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const Task = ({ task }) => {
  return (
    <TaskContainer>
      <p>
        <span style={{ fontWeight: "bold" }}> Title: </span> {task.title}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}> Description: </span>{" "}
        {task.description}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Status: </span>
        {task.status}
      </p>
    </TaskContainer>
  );
};

export default Task;
