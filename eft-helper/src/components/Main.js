import mainlogo from "../images/logo2.png";
import Nav from "./Nav";
import Search from "./Search";

const Main = () => {
  return (
    <div className="background">
      <div className="container">
        <img src={mainlogo} alt="logo" />
        <h1>Helper</h1>
      </div>
      <Nav />
      <Search />
    </div>
  );
};
export default Main;
