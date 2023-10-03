import React, { useEffect, useState } from 'react';
import './MarketInfo.css';
import Paging from './Paging';
import MarketSearch from './MarketSearch';

const MarketInfo = () => {
    const [marketData, setMarketData] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const [dataPerPage, setDataPerPage] = useState(15);
    const [page, setPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };

    useEffect(() => {
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
                const reversedData = [...data.data.items].reverse();
                setMarketData(reversedData);

                const indexOfLastData = page * dataPerPage;
                const indexOfFirstData = indexOfLastData - dataPerPage;
                setCurrentData(reversedData.slice(indexOfFirstData, indexOfLastData));
            });
    }, [page, dataPerPage]);

    const handleSearchChange = (searchTerm) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        setSearchValue(lowerCaseSearchTerm);

        const filteredData = marketData.filter((item) => item.name.toLowerCase().includes(lowerCaseSearchTerm));

        const newPage = 1; // 검색 결과에서는 항상 첫 페이지만 보여줍니다.
        const newDataPerPage = filteredData.length <= dataPerPage ? filteredData.length : 15;

        setDataPerPage(newDataPerPage);
        setPage(newPage);
        setCurrentData(filteredData.slice(0, newDataPerPage));
    };

    return (
        <div className="market-container">
            <MarketSearch onSearch={handleSearchChange} />

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
                    {currentData.map((data) => (
                        <tr key={data.id} className="market-tbody-tr">
                            <td>
                                <img src={data.iconLink} alt={data.name} />
                            </td>
                            <td>{data.name}</td>
                            <td>{data.lastLowPrice}</td>
                            <td>{data.updated}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {marketData.length > dataPerPage && (
                <Paging
                    totalCount={marketData.length}
                    page={page}
                    dataPerPage={dataPerPage}
                    pageRangeDisplayed={5}
                    handlePageChange={handlePageChange}
                />
            )}
        </div>
    );
};

export default MarketInfo;
