import React, { useState } from 'react';
import './Ammo.css';

const Ammo = () => {
    const [activeButton, setActiveButton] = useState(null);
    const [hoveredButton, setHoveredButton] = useState(null);

    const handleMouseEnter = (button) => {
        setHoveredButton(button);
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
    };

    const handleMouseClick = (button) => {
        if (activeButton === button) {
            setActiveButton(null);
        } else {
            setActiveButton(button);
        }
    };

    const getButtonStyle = (button) => {
        return {
            backgroundColor: activeButton === button || hoveredButton === button ? 'black' : '#f1efef',
            color: activeButton === button || hoveredButton === button ? '#f1efef' : 'black',
        };
    };

    const buttons = [
        '12Gauge',
        '20Gauge',
        '23x75mm',
        '9x18mm',
        '7.62x25mm',
        '9x19mm',
        '.45',
        '9x21mm',
        '.357Magnum',
        '5.7x28mm',
        '4.6x30mm',
        '9x39mm',
        '.366',
        '5.45x39mm',
        '5,56x45mm',
        '7.62x39mm',
        '.300blk',
        '7.62x51',
        '7.62x54R',
        '12.7x55mm',
        '.388LapuaMagnum',
        'Mounted Weapons',
        'Other',
    ];

    return (
        <div className="container">
            <div className="ammo-container">
                {buttons.map((btn, index) => (
                    <button
                        key={index}
                        className="ammo-btn"
                        style={getButtonStyle(btn)}
                        onMouseEnter={() => handleMouseEnter(btn)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleMouseClick(btn)}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Ammo;
