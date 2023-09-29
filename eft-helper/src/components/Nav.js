import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button === activeButton ? null : button);
  };

  const getButtonStyle = (button) => {
    return {
      backgroundColor: activeButton === button || hoveredButton === button ? "black" : "#f1efef",
      color: activeButton === button || hoveredButton === button ? "#f1efef" : "black",
    };
  };

  const buttons = ["Ammo", "Armor", "Market", "Map"];

  return (
    <div className="container">
      <div className="nav-container">
        {buttons.map((button, index) => (
          <Link to={`/${button}`} key={index}>
            <button
              style={getButtonStyle(button)}
              onMouseEnter={() => handleMouseEnter(button)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
