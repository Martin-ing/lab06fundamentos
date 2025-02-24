import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Taskinput } from "./components/Taskinput";
import { Tasklist } from "./components/Tasklist";
import { Menu } from "./components/Menu";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [scategorie, setScategorie] = useState("");

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container className="mt-4">
      <h2>Administrador de tareas</h2>
      <Taskinput addTask={addTask} />

      <Tasklist tasks={tasks} removeTask={removeTask} scategorie={scategorie} />
    </Container>
  );
}
