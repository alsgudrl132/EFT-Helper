import mainlogo from '../../images/logo2.png';
import Nav from '../Nav';
import HeadwearData from './HeadwearData';

const Headwear = () => {
    return (
        <div className="background">
            <div className="container">
                <img src={mainlogo} alt="logo" />
                <h1>Helper</h1>
            </div>
            <Nav />
            <HeadwearData />
        </div>
    );
};
export default Headwear;
