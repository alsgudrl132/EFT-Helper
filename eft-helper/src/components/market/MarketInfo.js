import React, { useEffect, useState } from 'react';
import './MarketInfo.css';
import Paging from './Paging';
import MarketSearch from './MarketSearch';
import Loading from '../loading/Loading';

const MarketInfo = () => {
    const [loading, setLoading] = useState(true);
    const [marketData, setMarketData] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const [dataPerPage, setDataPerPage] = useState(15);
    const [page, setPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [originalDataPerPage, setOriginalDataPerPage] = useState(15); // 새로운 상태 추가

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };

    useEffect(() => {
        setLoading(true);
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
                setLoading(false);
                const indexOfLastData = page * dataPerPage;
                const indexOfFirstData = indexOfLastData - dataPerPage;
                setCurrentData(reversedData.slice(indexOfFirstData, indexOfLastData));
            });
    }, [page, dataPerPage]);

    const handleSearchChange = (search) => {
        setSearchValue(search);
        console.log(searchValue);
    };

    const addComma = (price) => {
        let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return returnString;
    };

    return (
        <div className="market-container">
            <MarketSearch onSearch={handleSearchChange} />
            {loading ? (
                <Loading />
            ) : (
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
                        {searchValue !== null && searchValue !== ''
                            ? marketData
                                  .filter((filterData) => filterData.name.toLowerCase().includes(searchValue))
                                  .map((data) => (
                                      <tr key={data.id} className="market-tbody-tr">
                                          <td>
                                              <img src={data.iconLink} alt={data.name} />
                                          </td>
                                          <td>{data.name}</td>
                                          <td>{addComma(data.lastLowPrice)}</td>
                                          <td>{data.updated}</td>
                                      </tr>
                                  ))
                            : currentData.map((data) => (
                                  <tr key={data.id} className="market-tbody-tr">
                                      <td>
                                          <img src={data.iconLink} alt={data.name} />
                                      </td>
                                      <td>{data.name}</td>
                                      <td>{addComma(data.lastLowPrice)}</td>
                                      <td>{data.updated}</td>
                                  </tr>
                              ))}
                    </tbody>
                </table>
            )}
            {searchValue === '' ? (
                <Paging
                    totalCount={marketData.length}
                    page={page}
                    dataPerPage={originalDataPerPage} // 여기서 원래 값을 사용합니다.
                    pageRangeDisplayed={5}
                    handlePageChange={handlePageChange}
                />
            ) : (
                ''
            )}
        </div>
    );
};

export default MarketInfo;
