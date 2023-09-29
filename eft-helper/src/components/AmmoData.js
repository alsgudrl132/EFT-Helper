import React, { useState, useEffect } from "react";

import "./AmmoData.css";

const AmmoData = () => {
  const [ammoImg, setAmmoImg] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.tarkov.dev/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
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
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function getPenetrateStyle(level) {
    const colors = ["#4CF057", "#87D43D", "#C0B825", "#F99D10", "#EA6B0A", "#DC3B07", "#CF0B04"];

    // 단계를 1부터 6까지로 제한
    level = Math.min(Math.max(level, 1), 6);

    // 배열 인덱스로 색상 선택
    return colors[7 - level];
  }
  return (
    <div className="container">
      <table className="ammo-table">
        <thead className="ammo-thead">
          <tr className="ammo-tr">
            <th>탄약 사진</th>
            <th>탄약 이름</th>
            <th>탄약 데미지</th>
            <th>반동</th>
            <th>정밀도</th>
            <th>클래스1</th>
            <th>클래스2</th>
            <th>클래스3</th>
            <th>클래스4</th>
            <th>클래스5</th>
            <th>클래스6</th>
          </tr>
        </thead>
        <tbody className="ammo-tbody">
          <tr className="ammo-tr">
            <td>
              <img src={ammoImg} alt="ammoImg" />
            </td>
            <td>m855a1</td>
            <td>49</td>
            <td>5</td>
            <td>-10%</td>
            <td style={{ backgroundColor: getPenetrateStyle(6) }} className="class1">
              6
            </td>
            <td style={{ backgroundColor: getPenetrateStyle(6) }} className="class2">
              6
            </td>
            <td style={{ backgroundColor: getPenetrateStyle(6) }} className="class3">
              6
            </td>
            <td style={{ backgroundColor: getPenetrateStyle(6) }} className="class4">
              6
            </td>
            <td style={{ backgroundColor: getPenetrateStyle(5) }} className="class5">
              5
            </td>
            <td style={{ backgroundColor: getPenetrateStyle(4) }} className="class6">
              4
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default AmmoData;
