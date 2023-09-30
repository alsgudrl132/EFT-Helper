import mainlogo from '../../images/logo2.png';
import Nav from '../Nav';
import MarketInfo from './MarketInfo';
import MarketSearch from './MarketSearch';

const Market = () => {
    return (
        <div className="background">
            <div className="container">
                <img src={mainlogo} alt="logo" />
                <h1>Helper</h1>
            </div>
            <Nav />
            <MarketSearch />
            <MarketInfo />
        </div>
    );
};
export default Market;
