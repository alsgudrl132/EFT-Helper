import { useEffect, useState } from "react";
import headwearTest from "../../images/3M_icon.webp";
import "./HeadwearData.css";

const HeadwearData = ({ searchValue }) => {
  const [headwear, setheadwear] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://125.142.47.191:5000/EFT_API/ARMOR_ALL_SELECT");
        const data = await response.json();
        console.log(data);
        setheadwear(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="headwear-text-container">
        <div>
          <h2>헬멧 정보</h2>
        </div>
      </div>
      <div className="headwear-container">
        <table className="headwear-table">
          <thead className="headwear-thead">
            <tr className="headwear-thead-tr">
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
          <tbody className="headwear-tbody">
            {headwear.map((data, index) => (
              <tr key={index} className="headwear-tbody-tr">
                <th>
                  <img className="headwear-img" src={headwearTest} alt="3M Icon" />
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
export default HeadwearData;
