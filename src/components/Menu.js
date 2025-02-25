import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function Menu({ categorias, scategorie, setScategorie }) {
  const [selectedOption, setSelectedOption] = useState("todas");

  const handleSelect = (option) => {
    setSelectedOption(option);
    setScategorie(option);
  };

  return (
    <Dropdown className="m-3">
      <Dropdown.Toggle className="bg-white text-dark border border-secondary">
        Categoria: {selectedOption}
      </Dropdown.Toggle>

      <Dropdown.Menu className="bg-white">
        {categorias.map((task, index) => (
          <Dropdown.Item key={index} onClick={() => handleSelect(task)}>
            {task}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
