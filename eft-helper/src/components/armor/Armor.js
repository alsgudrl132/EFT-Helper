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
            <div className="license-center">
                <div className="license-container">
                    <div>
                        <div className="license-box">
                            <p>모든 아머 관련 데이터는 타르코프위키에서 불러왔습니다.</p>
                            <a href="https://escapefromtarkov.fandom.com/wiki/Escape_from_Tarkov_Wiki" target="blink">
                                https://escapefromtarkov.fandom.com/wiki/Escape_from_Tarkov_Wiki
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Armor;
