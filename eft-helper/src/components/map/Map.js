import mainlogo from '../../images/logo2.png';
import Nav from '../Nav';
import MapInfo from './MapInfo';

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
