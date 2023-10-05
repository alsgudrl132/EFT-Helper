import mainlogo from '../../images/logo2.png';
import Nav from '../Nav';
import MapInfo from './MapInfo';
import './Map.css';
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data) => console.log(data));
const Map = () => {
    const license = [
        {
            make: "커스텀 지도 원작자 : DC 타르코프 갤러리 'MOBILIS' 님",
            source: 'gall.dcinside.com/mgallery/board/view/?id=eft&no=647996&_rk=JRL&page=1',
        },
        {
            make: "공장 지도 원작자 : DC 타르코프 갤러리 'MOBILIS' 님",
            source: 'gall.dcinside.com/mgallery/board/view/?id=eft&no=647996&_rk=JRL&page=1',
        },
        {
            make: "해안선 원작자 : DC 타르코프 갤러리 'MOBILIS' 님",
            source: 'gall.dcinside.com/mgallery/board/view/?id=eft&no=647996&_rk=JRL&page=1',
        },
        {
            make: "우드 원작자 : DC 타르코프 갤러리 'MOBILIS' 님",
            source: 'gall.dcinside.com/mgallery/board/view/?id=eft&no=671732&page=1',
        },
        {
            make: "인터체인지 원작자 : DC 타르코프 갤러리 'MOBILIS' 님",
            source: 'gall.dcinside.com/mgallery/board/view/?id=eft&no=77003&exception_mode=recommend&page=1',
        },
        {
            make: "리저브 원작자 : DC 타르코프 갤러리 'MOBILIS' 님",
            source: 'gall.dcinside.com/mgallery/board/view/?id=eft&no=77003&exception_mode=recommend&page=1',
        },
        {
            make: "랩 원작자 : DC 타르코프 갤러리 'MOBILIS' 님",
            source: 'gall.dcinside.com/mgallery/board/view/?id=eft&no=647996&_rk=JRL&page=1',
        },
        {
            make: "등대 원작자 : DC 타르코프 갤러리 'MOBILIS' 님",
            source: 'https://gall.dcinside.com/mgallery/board/view/?id=eft&no=1253017&page=1',
        },
        {
            make: '스트리트 오브 타르코프 원작자 : REƎMR 님',
            source: 'https://twitter.com/re3mr/status/1690022316757909504?s=19',
        },
    ];

    return (
        <div className="background">
            <div className="container">
                <img src={mainlogo} alt="logo" />
                <h1>Helper</h1>
            </div>
            <Nav />
            <MapInfo />
            <div className="container">
                <div className="license-container">
                    <div>
                        {license.map((data, index) => (
                            <div key={index} className="license-box">
                                <p>{data.make}</p>
                                <a href={data.source} target="blink">
                                    {data.source}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Map;
