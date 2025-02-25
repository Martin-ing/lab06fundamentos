import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function Menu({ categorias, scategorie }) {
  const [selectedOption, setSelectedOption] = useState("todas");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="m-3">
      <Dropdown>
        <Dropdown.Toggle>Categoria: {selectedOption}</Dropdown.Toggle>

        <Dropdown.Menu>
          {categorias.map((task, index) => (
            <Dropdown.Item key={index} onClick={() => handleSelect(task)}>
              {task}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
