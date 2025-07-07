import '../assets/styles/greeting.css'
import Lera from '../assets/images/lera.png';
import Sasha from '../assets/images/sasha.png';
import FiveStars from '../assets/images/5stars.png';
import HeartBetween from '../assets/images/heart3.png';
import TwoStars from '../assets/images/2stars.png';
import NamesHeart from '../assets/images/heart2.png';

const Greeting = () => {
    return (
        <div>
            <div className="greeting-wrap">
                <div className="baby-photo-block">
                    <div className='babies-container'> {/* Новый контейнер для фото детей */}
                        <img className='babyLera' src={Lera} ></img>
                        <img className='babySasha' src={Sasha}></img>
                        <div className='decorate-imgs'>
                            <img className='five-stars' src={FiveStars}></img>
                            <img className='heart-between' src={HeartBetween}></img>
                            <img className='two-stars' src={TwoStars}></img>
                        </div>
                        <div className='names-block'>
                            {/* <p className='names'>Александр + Валерия =</p>
                            <img className='names-heart' src={NamesHeart}></img> */}
                        </div>
                        <div className='date-block'>
                            <div className='names-block'>
                                <p className='names'>Александр + Валерия =</p>
                                <img className='names-heart' src={NamesHeart}></img>
                            </div>
                            <div className='dates'>
                                <p className='date1'>24</p>
                                <p className='date2'>июля</p>
                                <p className='date3'>2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Greeting;