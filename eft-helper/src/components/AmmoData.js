import React, { useState, useEffect } from 'react';

import './AmmoData.css';

const AmmoData = () => {
    const [ammoImg, setAmmoImg] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.tarkov.dev/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    body: JSON.stringify({
                        query: `{
                            items(name: "m855a1") {
                                iconLink
                            }
                        }`,
                    }),
                });
                const data = await response.json();
                setAmmoImg(data.data.items[0].iconLink);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="container">
            <table className="ammo-table">
                <thead className="ammo-thead">
                    <tr className="ammo-tr">
                        <th>탄약 사진</th>
                        <th>탄약 이름</th>
                        <th>탄약 데미지</th>
                        <th>방탄 관통</th>
                    </tr>
                </thead>
                <tbody className="ammo-tbody">
                    <tr className="ammo-tr">
                        <td>
                            <img src={ammoImg} alt="ammoImg" />
                        </td>
                        <td>m855a1</td>
                        <td>58</td>
                        <td>666543</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default AmmoData;
