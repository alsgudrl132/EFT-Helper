import mainlogo from '../../images/logo2.png';
import Nav from '../Nav';
import MarketInfo from './MarketInfo';

const Market = () => {
    return (
        <div className="background">
            <div className="container">
                <img src={mainlogo} alt="logo" />
                <h1>Helper</h1>
            </div>
            <Nav />
            <MarketInfo />
            <div className="license-center">
                <div className="license-container">
                    <div>
                        <div className="license-box">
                            <p>모든 마켓 관련 데이터는 TARKOV.DEV에서 불러왔습니다.</p>
                            <a href="https://tarkov.dev/api/" target="blink">
                                https://tarkov.dev/api/
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Market;
