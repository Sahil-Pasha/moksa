import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Column from "./TaskColumn";
import {
  getTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "../utils/localStorage";

const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TaskBoard = () => {
  const [columns, setColumns] = useState([
    { id: 1, status: "To Do" },
    { id: 2, status: "In Progress" },
    { id: 3, status: "Done" },
  ]);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = getTasksFromLocalStorage();
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <BoardContainer>
      {columns.map((column) => (
        <Column
          key={column.id}
          status={column.status}
          tasks={tasks.filter((task) => task.status === column.status)}
          onAddTask={handleAddTask}
        />
      ))}
    </BoardContainer>
  );
};

export default TaskBoard;
