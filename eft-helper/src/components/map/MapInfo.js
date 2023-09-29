import customBgImg from '../../images/custom.jpeg';
import factoryBgImg from '../../images/factory.webp';
import interchangeBgImg from '../../images/interchange.jpeg';
import labBgImg from '../../images/lab.webp';
import lightHouseBgImg from '../../images/lightHouse.jpeg';
import reserveBgImg from '../../images/reserve.jpg';
import shorelineBgImg from '../../images/shoreline.jpeg';
import streetsOfTarkovBgImg from '../../images/streetsOfTarkov.jpeg';
import woodBgImg from '../../images/wood.jpeg';

import './MapInfo.css';

const MapInfo = () => {
    const maps = [
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
    return (
        <div>
            <div className="map-container">
                {maps.map((bgMap) => (
                    <div className="map-wrapper">
                        <img src={bgMap.img} alt={bgMap} />
                        <div className="map-overlay">{bgMap.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default MapInfo;
