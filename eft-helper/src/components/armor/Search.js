import { useState } from 'react';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');

    const onChange = (e) => {
        setSearchValue(e.target.value);
    };
    return (
        <div>
            <div className="center-container">
                <div className="search-container">
                    <input type="text" placeholder="검색어를 입력하세요" onChange={onChange} value={searchValue} />
                </div>
            </div>
        </div>
    );
};
export default Search;
