import React, { useState } from 'react';
import './Nav.css';

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
            backgroundColor: activeButton === button || hoveredButton === button ? 'black' : '#f1efef',
            color: activeButton === button || hoveredButton === button ? '#f1efef' : 'black',
        };
    };

    const buttons = ['탄약', '방탄', '플리마켓', '지도'];

    return (
        <div className="container">
            <div className="nav-container">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        style={getButtonStyle(button)}
                        onMouseEnter={() => handleMouseEnter(button)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleButtonClick(button)}
                    >
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Nav;
