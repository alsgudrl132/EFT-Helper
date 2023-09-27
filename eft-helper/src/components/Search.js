import './Search.css';

const Search = () => {
    const onChange = (e) => {
        console.log(e.target.value);
    };
    return (
        <div className="container">
            <div className="search-container">
                <input type="text" placeholder="검색어를 입력하세요" onChange={onChange} />
            </div>
        </div>
    );
};
export default Search;
