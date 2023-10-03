import React, { useState } from 'react';
import './Ammo.css';
import AmmoData from './AmmoData';

const Ammo = (props) => {
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
        '12 Gauge',
        '20 Gauge',
        '23x75 mm',
        '9x18 mm',
        '7.62x25 mm',
        '9x19 mm',
        '.45',
        '9x21 mm',
        '.357 Magnum',
        '5.7x28 mm',
        '4.6x30 mm',
        '9x39 mm',
        '.366',
        '5.45x39 mm',
        '5.56x45 mm',
        '7.62x39 mm',
        '.300 blk',
        '7.62x51 mm',
        '7.62x54 R',
        '12.7x55 mm',
        '.338 Lapua Magnum',
        'Mounted Weapons',
        'Other',
    ];

    return (
        <div>
            <div className="container">
                <div className="ammo-container">
                    {props.searchValue !== ''
                        ? buttons
                              .filter((btn) => btn.includes(props.searchValue))
                              .map((btn, index) => (
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
                              ))
                        : buttons.map((btn, index) => (
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
            <AmmoData activeButton={activeButton} />
        </div>
    );
};

export default Ammo;
