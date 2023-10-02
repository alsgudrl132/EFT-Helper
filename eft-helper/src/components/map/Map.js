import mainlogo from "../../images/logo2.png";
import Nav from "../Nav";
import MapInfo from "./MapInfo";
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
const Map = () => {
  return (
    <div className="background">
      <div className="container">
        <img src={mainlogo} alt="logo" />
        <h1>Helper</h1>
      </div>
      <Nav />
      <MapInfo />
    </div>
  );
};
export default Map;
