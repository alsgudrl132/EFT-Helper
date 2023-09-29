import customBgImg from '../../images/custom.jpeg';
import factoryBgImg from '../../images/factory.webp';
import interchangeBgImg from '../../images/interchange.jpeg';
import labBgImg from '../../images/lab.webp';
import lightHouseBgImg from '../../images/lightHouse.jpeg';
import reserveBgImg from '../../images/reserve.jpg';
import shorelineBgImg from '../../images/shoreline.jpeg';
import streetsOfTarkovBgImg from '../../images/streetsOfTarkov.jpeg';
import woodBgImg from '../../images/wood.jpeg';

import customMap from '../../images/customMap.png';
import factoryMap from '../../images/factoryMap.png';
import interchangeMap from '../../images/interchangeMap.png';
import labMap from '../../images/labMap.png';
import lightHouseMap from '../../images/lightHouseMap.png';
import reserveMap from '../../images/reserveMap.png';
import shorelineMap from '../../images/shorelineMap.png';
import streetsOfTarkovMap from '../../images/streetsOfTarkovMap.jpeg';
import woodMap from '../../images/woodMap.png';

import MapModal from './MapModal';
import './MapInfo.css';
import { useState } from 'react';

const MapInfo = () => {
    const [selectedMap, setSelectedMap] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const bgMaps = [
        { img: customBgImg, text: '세관' },
        { img: factoryBgImg, text: '공장' },
        { img: interchangeBgImg, text: '인터체인지' },
        { img: labBgImg, text: '랩' },
        { img: lightHouseBgImg, text: '등대' },
        { img: reserveBgImg, text: '리저브' },
        { img: shorelineBgImg, text: '해안선' },
        { img: streetsOfTarkovBgImg, text: '스트리트 오브 타르코프' },
        { img: woodBgImg, text: '삼림' },
    ];
    const maps = [
        customMap,
        factoryMap,
        interchangeMap,
        labMap,
        lightHouseMap,
        reserveMap,
        shorelineMap,
        streetsOfTarkovMap,
        woodMap,
    ];
    const onClickBgImg = (bgMap) => {
        setSelectedMap(bgMap);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <div className="map-container">
                {bgMaps.map((bgMap, index) => (
                    <div className="map-wrapper" key={index}>
                        <img
                            src={selectedMap === bgMap.text ? maps[index] : bgMap.img}
                            alt={bgMap}
                            onClick={() => onClickBgImg(bgMap.text)}
                        />
                        <div className="map-overlay">{bgMap.text}</div>
                    </div>
                ))}
            </div>
            {isModalOpen && (
                <MapModal
                    mapSrc={maps[bgMaps.findIndex((bgMap) => bgMap.text === selectedMap)]}
                    altText={selectedMap}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
};
export default MapInfo;
