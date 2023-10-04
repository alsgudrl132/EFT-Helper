import mainlogo from '../../images/logo2.png';
import Nav from '../Nav';
import ArmorData from './ArmorData';

const Armor = () => {
    return (
        <div className="background">
            <div className="container">
                <img src={mainlogo} alt="logo" />
                <h1>Helper</h1>
            </div>
            <Nav />
            <ArmorData />
        </div>
    );
};
export default Armor;
