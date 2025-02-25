import React from "react";
import { ListGroup, Button } from "react-bootstrap";

export function Tasklist({ tasks, removeTask, scategorie }) {
  return (
    <ListGroup>
      {tasks
        .filter((task) => scategorie == "todas" || task[1] == scategorie)
        .map((task, index) => (
          <ListGroup.Item
            key={index}
            className="d-flex justify-content-between"
          >
            <div>
              <p>{task[0]}</p>
              <p style={{ fontSize: "smaller", color: "gray" }}>
                Categoria: {task[1]}
              </p>
            </div>
            <Button
              variant="light"
              className="text-danger"
              onClick={() => removeTask(index)}
            >
              X
            </Button>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
}
