import { useEffect, useState } from 'react';
import './HeadwearData.css';
const images = [];
for (let i = 1; i <= 31; i++) {
    const img = require(`./img/${i}.webp`);
    images.push(img);
}
const HeadwearData = ({ searchValue }) => {
    const [headwear, setheadwear] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://125.142.47.191:5000/EFT_API/HEADWEAR_ALL_SELECT');
                const data = await response.json();
                console.log(data);
                setheadwear(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const getStyle = (headwearStatus) => {
        if (headwearStatus.includes('-')) {
            return { color: 'red' };
        }
        return {};
    };
    const getHeadsetStyle = (headwearStatus) => {
        if (headwearStatus.includes('No')) {
            return { color: '#32CD32' };
        } else if (headwearStatus.includes('Yes')) {
            return { color: 'red' };
        }
    };
    return (
        <div>
            <div className="headwear-text-container">
                <div>
                    <h2>헬멧 정보</h2>
                </div>
            </div>
            <div className="headwear-container">
                <table className="headwear-table">
                    <thead className="headwear-thead">
                        <tr className="headwear-thead-tr">
                            <th>방탄 이미지</th>
                            <th>이름</th>
                            <th>방탄 클래스</th>
                            <th>보호부위</th>
                            <th>재질</th>
                            <th>내구도</th>
                            <th>인체공학</th>
                            <th>이동속도</th>
                            <th>회전속도</th>
                            <th>도탄확률</th>
                            <th>소음감소</th>
                            <th>헤드셋 착용불가</th>
                            <th>타입</th>
                            <th>무게</th>
                        </tr>
                    </thead>
                    <tbody className="headwear-tbody">
                        {headwear.map((data, index) => (
                            <tr key={index} className="headwear-tbody-tr">
                                <th>
                                    <img className="armor-img" src={images[index]} alt="img" />
                                </th>
                                <td>{data.name}</td>
                                <td>{data.class}</td>
                                <td>{data.areas}</td>
                                <td>{data.material}</td>
                                <td>{data.durability}</td>
                                <td style={getStyle(data.ergo_nomics)}>{data.ergo_nomics}</td>
                                <td style={getStyle(data.movement_speed)}>{data.movement_speed}</td>
                                <td style={getStyle(data.turning_speed)}>{data.turning_speed}</td>
                                <td>{data.ricochet_chance}</td>
                                <td>{data.sound_reduction}</td>
                                <td style={getHeadsetStyle(data.blocks_headset)}>{data.blocks_headset}</td>
                                <td>{data.type}</td>
                                <td>{data.weight}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default HeadwearData;
