import { Carousel } from 'react-bootstrap';
import Zags2 from '../assets/images/zags2.jpg';
import Zags3 from '../assets/images/zags3.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/location.css';
import Bouquet from '../assets/images/bouquet.png';
import Gift3 from '../assets/images/gift3.png';
import HappyEnd from '../assets/images/happyend.png';

const Location = () => {
    return (
        <div>
            <div className="location-wrap">
                <p className='title-location'>Локация</p>
                <div className='carousel-block'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Zags3}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Zags2}
                            alt=""
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div className='location-text'>
                        <p className='adress'>Церемония будет проходить во Дворце Бракосочетания</p>
                        <p className='adress-red'>по адресу ул. Молодогвардейская, 238</p>
                        <p className='adress'>Сбор гостей: <span className='adress-red'>9:30</span></p>
                        <p className='adress'>Начало церемонии: <span className='adress-red'>10:10</span></p>
                    </div>
                </div>
            </div>
            <div className='details-wrap'>
                <p className='title-details'>Детали</p>
                <div>
                    <p className='details1'>Для нас главное - Ваше присутствие! Но мы будем рады, если вы воздержитесь от джинс, 
                    спортивной одежды, а девушки - от белого цвета при выборе наряда. Будет замечательно, если вы отдадите 
                    предпочтение пастельным тонам и черному цвету.</p>
                </div>
                <div>
                    <img className='det-img2' src={Bouquet}></img>
                    <p className='details2'>Пожалуйста, не дарите нам цветы, мы не сможем им обеспечить должный уход и заботу</p>
                </div>
                <div>
                    <img className='det-img3' src={Gift3}></img>
                    <p className='details3'>Мы очень ценим вашу заботу и внимание к нашей семье! Если вы задумываетесь о подарке,
                    мы будем рады, если вы сделаете вклад в наш семейный бюджет, это поможет нам осуществить наши общие мечты! 
                    </p>
                </div>
            </div>
            <div className='happy-end'>
                <p className='happy-title'>Ждем вас!</p>
                <p className='happy-text'>С любовью, Саша и Лера</p>
                <img className='happy-img' src={HappyEnd}></img>
            </div>
        </div>
    );
};

export default Location;