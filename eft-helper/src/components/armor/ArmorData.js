import { useEffect, useState } from 'react';
import './ArmorData.css';
const images = [];
for (let i = 1; i <= 30; i++) {
    const img = require(`./img/${i}.webp`);
    images.push(img);
}

const ArmorData = ({ searchValue }) => {
    const [armor, setArmor] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://125.142.47.191:5000/EFT_API/ARMOR_ALL_SELECT');
                const data = await response.json();
                setArmor(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getStyle = (armorStatus) => {
        if (armorStatus.includes('-')) {
            return { color: 'red' };
        }
    };

    return (
        <div>
            <div className="armor-text-container">
                <div>
                    <h2>방탄 정보</h2>
                </div>
            </div>
            <div className="armor-container">
                <table className="armor-table">
                    <thead className="armor-thead">
                        <tr className="armor-thead-tr">
                            <th>방탄 이미지</th>
                            <th>이름</th>
                            <th>방탄 클래스</th>
                            <th>보호부위</th>
                            <th>재질</th>
                            <th>내구도</th>
                            <th>인체공학</th>
                            <th>이동속도</th>
                            <th>회전속도</th>
                            <th>타입</th>
                            <th>무게</th>
                        </tr>
                    </thead>
                    <tbody className="armor-tbody">
                        {armor.map((data, index) => (
                            <tr className="armor-tbody-tr" key={index}>
                                <td>
                                    <img className="armor-img" src={images[index]} alt="img" />
                                </td>
                                <td>{data.name}</td>
                                <td>{data.class}</td>
                                <td>{data.areas}</td>
                                <td>{data.material}</td>
                                <td>{data.durability}</td>
                                <td style={getStyle(data.ergonomics)}>{data.ergonomics}</td>
                                <td style={getStyle(data.movement_speed)}>{data.movement_speed}</td>
                                <td style={getStyle(data.turning_speed)}>{data.turning_speed}</td>
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

export default ArmorData;
