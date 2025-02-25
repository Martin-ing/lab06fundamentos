import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function Taskinput({ addTask }) {
  const [task, setTask] = useState("");
  const [categorie, setCategorie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask([task, categorie]);
    setTask("");
    setCategorie("");
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Form.Group>
        <Form.Control
          type="text"
          value={task}
          placeholder="Ingrese su tarea"
          onChange={(e) => setTask(e.target.value)}
        />
        <Form.Control
          type="text"
          value={categorie}
          placeholder="Ingrese su categoria"
          onChange={(e) => setCategorie(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="secondary"
        type="submit"
        className="mt-2"
        disabled={!(task.trim() !== "" && categorie.trim() !== "")}
        style={{ backgroundColor: "purple", borderColor: "purple" }}
      >
        Añadir
      </Button>
    </Form>
  );
}
