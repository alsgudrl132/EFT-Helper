import { useEffect, useState } from "react";
import armorTest from "../../images/3M_icon.webp";
import "./ArmorData.css";

const ArmorData = ({ searchValue }) => {
  const [armor, setArmor] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://125.142.47.191:5000/EFT_API/ARMOR_ALL_SELECT");
        const data = await response.json();
        console.log(data);
        setArmor(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
              <th>이동속도</th>
              <th>회전속도</th>
              <th>타입</th>
              <th>무게</th>
            </tr>
          </thead>
          <tbody className="armor-tbody">
            {armor.map((data, index) => (
              <tr key={index} className="armor-tbody-tr">
                <th>
                  <img className="armor-img" src={armorTest} alt="3M Icon" />
                </th>
                <td>{data.name}</td>
                <td>{data.class}</td>
                <td>{data.areas}</td>
                <td>{data.material}</td>
                <td>{data.durability}</td>
                <td>{data.movement_speed}</td>
                <td>{data.turning_speed}</td>
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
