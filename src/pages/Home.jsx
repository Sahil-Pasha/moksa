import React from "react";
import TaskBoard from "../components/TaskBoard";
const Home = () => {
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Task Management Board
      </h1>
      <TaskBoard />
    </div>
  );
};

export default Home;
