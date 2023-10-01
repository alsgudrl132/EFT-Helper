import React, { useState, useEffect } from 'react';

import './AmmoData.css';

const AmmoData = () => {
    const [ammoImg, setAmmoImg] = useState('');
    const [ammo, setAmmo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://125.142.47.191:5000/EFT_API/ALL_SELECT');
                const data = await response.json();
                setAmmo(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        //     const fetchData = async () => {
        //         try {
        //             const response = await fetch('https://api.tarkov.dev/graphql', {
        //                 method: 'POST',
        //                 headers: {
        //                     'Content-Type': 'application/json',
        //                     Accept: 'application/json',
        //                 },
        //                 body: JSON.stringify({
        //                     query: `{
        //                         items(name: "m855a1") {
        //                             iconLink
        //                         }
        //                     }`,
        //                 }),
        //             });
        //             const data = await response.json();
        //             setAmmoImg(data.data.items[0].iconLink);
        //         } catch (error) {
        //             console.error('Error fetching data:', error);
        //         }
        //     };

        //     fetchData();
    }, []);
    const colors = ['#4CF057', '#87D43D', '#C0B825', '#F99D10', '#EA6B0A', '#DC3B07', '#CF0B04'];
    function getRecoilStyle(recoilValue) {
        if (recoilValue > 0) {
            return { backgroundColor: colors[6], color: '#f1efef' };
        } else if (recoilValue < 0) {
            return { backgroundColor: colors[0] };
        }
    }
    function getAccuracyStyle(accuracyValue) {
        if (accuracyValue > 0) {
            return { backgroundColor: colors[0] };
        } else if (accuracyValue < 0) {
            return { backgroundColor: colors[6], color: '#f1efef' };
        }
    }
    function getPenetrateStyle(level) {
        level = Math.min(Math.max(level, 1), 6);
        const color = colors[7 - level];

        return { backgroundColor: color }; // 스타일 객체로 반환
    }

    console.log(ammo);
    return (
        <div>
            <div className="ammo-text-container">
                <div>
                    <h2>밑의 숫자는 관통수치를 간단하게 나타낸것(참고만 할 것)</h2>
                    <h2> 1 - 쏘는게 의미 없음</h2>
                    <h2> 2 - 아주 희박한 확률로 관통</h2>
                    <h2> 3 - 운좋으면 가끔 관통함 </h2>
                    <h2>4 - 여전히 관통률이 낮지만 방어구를 빨리 부술 수 있음</h2>
                    <h2> 5 - 최대 90% 확률로 관통함 </h2>
                    <h2>6 - 초탄부터 80% 확률, 거의 모든 탄이 관통함</h2>
                </div>
            </div>
            <div className="container">
                <table className="ammo-table">
                    <thead className="ammo-thead">
                        <tr className="ammo-thead-tr">
                            <th>탄약 사진</th>
                            <th>탄약 종류</th>
                            <th>탄약 이름</th>
                            <th>탄약 데미지</th>
                            <th>반동</th>
                            <th>정밀도</th>
                            <th>클래스1</th>
                            <th>클래스2</th>
                            <th>클래스3</th>
                            <th>클래스4</th>
                            <th>클래스5</th>
                            <th>클래스6</th>
                        </tr>
                    </thead>
                    <tbody className="ammo-tbody">
                        {ammo.map((data) => (
                            <tr className="market-tbody-tr">
                                <th>
                                    <img src="#" alt={data.name} />
                                </th>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.damage}</td>
                                <td style={getRecoilStyle(data.speed)}>{data.speed}</td>
                                <td style={getAccuracyStyle(data.accuracy)}>{data.accuracy}</td>
                                <td style={getPenetrateStyle(data.class1)}>{data.class1}</td>
                                <td style={getPenetrateStyle(data.class2)}>{data.class2}</td>
                                <td style={getPenetrateStyle(data.class3)}>{data.class3}</td>
                                <td style={getPenetrateStyle(data.class4)}>{data.class4}</td>
                                <td style={getPenetrateStyle(data.class5)}>{data.class5}</td>
                                <td style={getPenetrateStyle(data.class6)}>{data.class6}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default AmmoData;
