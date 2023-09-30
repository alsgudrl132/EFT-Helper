import { useEffect, useState } from 'react';
import './MarketInfo.css';

const MarketInfo = () => {
    const [marketData, setMarketData] = useState([]); // 상태 추가
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    useEffect(() => {
        fetchMarketData();
    }, [pageNumber, pageSize]);
    function fetchMarketData() {
        fetch('https://api.tarkov.dev/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                query: `{
            items {
                id
                name
                iconLink
                updated
                lastLowPrice
            }
        }`,
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                console.log('data returned:', data);
                setMarketData(data.data.items); // 마켓 데이터 업데이트
            });
    }

    return (
        <div className="market-container">
            <table className="market-table">
                <thead className="market-thead">
                    <tr className="market-thead-tr">
                        <th>이미지</th>
                        <th>이름</th>
                        <th>가격</th>
                        <th>업데이트 시간</th>
                    </tr>
                </thead>
                <tbody className="market-tbody">
                    {marketData.map((data) => (
                        <tr key={data.id} className="market-tbody-tr">
                            <td>
                                <img src={data.iconLink} />
                            </td>
                            <td>{data.name}</td>
                            <td>{data.lastLowPrice}</td>
                            <td>{data.updated}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default MarketInfo;
