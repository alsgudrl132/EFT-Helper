import './Footer.css';
import mainlogo from '../../images/logo2.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <img src={mainlogo} alt="mainLogo" />
                <h3>EFT-Helper</h3>
                <h4>Copyright 2023</h4>
                <p>email : alsgudrl132@gmail.com</p>
                <p>email : ccjj1002@naver.com</p>
                <p>Design and Page Creation: Min Hyeonggi, Jo Jaehwan</p>
            </div>
        </div>
    );
};
export default Footer;
