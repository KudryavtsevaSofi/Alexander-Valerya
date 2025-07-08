import '../assets/styles/greeting.css'
import Lera from '../assets/images/lera.png';
import Sasha from '../assets/images/sasha.png';
import FiveStars from '../assets/images/5stars.png';
import HeartBetween from '../assets/images/heart3.png';
import TwoStars from '../assets/images/2stars.png';
import NamesHeart from '../assets/images/heart2.png';

const Greeting = () => {
    return (
        <div className="greeting-wrap">
            <div className="baby-photo-block">
                <div className='babies-container'>
                    <img className='babyLera' src={Lera} alt="Лера" />
                    <img className='babySasha' src={Sasha} alt="Саша" />
                    <div className='decorate-imgs'>
                        <img className='five-stars' src={FiveStars} alt="Звёзды" />
                        <img className='heart-between' src={HeartBetween} alt="Сердечко" />
                        <img className='two-stars' src={TwoStars} alt="Звёзды" />
                    </div>
                </div>
            </div>
            <div className='date-block'>
                <div className='names-block'>
                    <p className='names'>Александр + Валерия =</p>
                    <img className='names-heart' src={NamesHeart} alt="Сердечко" />
                </div>
                <div className='dates'>
                    <svg
                    version="1.1"
                    viewBox="0 0 500 200"
                    baseProfile="full"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <foreignObject x="35" y="5" width="200" height="200">
                            <div xmlns="http://www.w3.org/1999/xhtml" className='date1'>24</div>
                        </foreignObject>
                        <foreignObject x="220" y="0" width="250" height="200">
                            <div xmlns="http://www.w3.org/1999/xhtml" className='date2'>июля</div>
                        </foreignObject>
                        <foreignObject x="220" y="80" width="250" height="200">
                            <div xmlns="http://www.w3.org/1999/xhtml" className='date3'>2025</div>
                        </foreignObject>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Greeting;