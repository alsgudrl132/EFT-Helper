import { useState } from 'react';
import './MarketSearch.css';
const MarketSearch = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
        onSearch(e.target.value);
    };
    return (
        <div>
            <div className="center-container">
                <div className="market-search-container">
                    <input type="text" placeholder="검색어를 입력하세요" onChange={handleChange} value={searchValue} />
                </div>
            </div>
        </div>
    );
};
export default MarketSearch;
