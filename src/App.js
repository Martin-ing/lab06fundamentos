import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Taskinput } from "./components/Taskinput";
import { Tasklist } from "./components/Tasklist";
import { Menu } from "./components/Menu";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [scategorie, setScategorie] = useState("");
  const [categoriasunicas, setCategoriasunicas] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setCategorias([...categorias, task[1]]);
    setCategoriasunicas(["todas", ...new Set([...categorias, task[1]])]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setCategorias(categorias.filter((_, i) => i !== index));
    setCategoriasunicas(["todas", ...new Set([...categorias])]);
    setCategoriasunicas(categoriasunicas.filter((_, i) => i !== index + 1));
  };

  return (
    <Container className="mt-4">
      <h2>Administrador de tareas</h2>
      <Taskinput addTask={addTask} />
      <Menu categorias={categoriasunicas} scategorie={scategorie} />
      <Tasklist tasks={tasks} removeTask={removeTask} scategorie={scategorie} />
    </Container>
  );
}
