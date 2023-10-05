import { Background, LoadingText } from './Styles';
import Spinner from '../../images/Spinner-1.7s-261px.gif';

const Loading = () => {
    return (
        <Background>
            <LoadingText>잠시만 기다려 주세요.</LoadingText>
            <img src={Spinner} alt="로딩중" width="5%" />
        </Background>
    );
};
export default Loading;
