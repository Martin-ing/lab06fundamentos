import React from "react";
import { ListGroup, Button } from "react-bootstrap";

export function Tasklist({ tasks, removeTask, scategorie }) {
  return (
    <ListGroup>
      {tasks.map((task, index) => (
        <ListGroup.Item key={index} className="d-flex justify-content-between">
          {task[0]}
          <p>{task[1]}</p>
          <Button variant="danger" size="sm" onClick={() => removeTask(index)}>
            X
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
