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
        '12 GAUGE',
        '20 GAUGE',
        '23X75 MM',
        '9X18 MM',
        '7.62X25 MM',
        '9X19 MM',
        '.45',
        '9X21 MM',
        '.357 MAGNUM',
        '5.7X28 MM',
        '4.6X30 MM',
        '9X39 MM',
        '.366',
        '5.45X39 MM',
        '5.56X45 MM',
        '7.62X39 MM',
        '.300 BLK',
        '7.62X51 MM',
        '7.62X54 R',
        '12.7X55 MM',
        '.338 LAPUA MAGNUM',
        'MOUNTED WEAPONS',
        'OTHER',
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
            <div className="container">
                <div className="license-container">
                    <div>
                        <div className="license-box">
                            <p>모든 탄약 관련 데이터는 EFT-AMMO에서 불러왔습니다.</p>
                            <a href="https://www.eft-ammo.com/" target="blink">
                                https://www.eft-ammo.com/
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ammo;
