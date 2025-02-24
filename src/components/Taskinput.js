import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function Taskinput({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
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
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2">
        Añadir
      </Button>
    </Form>
  );
}
