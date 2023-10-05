import Search from './Search';

const ArmorData = ({ searchValue }) => {
    return (
        <div>
            <Search />
            <div className="ammo-text-container">
                <div>
                    <h2>방탄 정보</h2>
                </div>
            </div>
            <div className="container">
                <table className="armor-table">
                    <thead className="armor-thead">
                        <tr className="armor-thead-tr">
                            <th>방탄 이미지</th>
                            <th>이름</th>
                            <th>방탄 클래스</th>
                            <th>보호부위</th>
                            <th>재질</th>
                            <th>내구도</th>
                        </tr>
                    </thead>
                    <tbody className="armor-tbody"></tbody>
                </table>
            </div>
        </div>
    );
};
export default ArmorData;
