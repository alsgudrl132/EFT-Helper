import './App.css';
import '../reset.css';
import mainlogo from '../images/logo2.png';
import Nav from './Nav';
import Search from './Search';
import Ammo from './Ammo';
function App() {
    return (
        <div className="background">
            <div className="container">
                <img src={mainlogo} alt="logo" />
                <h1>Helper</h1>
            </div>
            <Nav />
            <Search />
            <Ammo />
        </div>
    );
}

export default App;
