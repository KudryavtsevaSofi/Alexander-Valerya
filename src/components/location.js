import { Carousel } from 'react-bootstrap';
import Zags1 from '../assets/images/zags1.jpg';
import Zags2 from '../assets/images/zags2.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/location.css';

const Location = () => {
    return (
        <div className="location-wrap">
            <p className='title-location'>Локация</p>
            <div className='carousel-block'>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Zags1}
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
            </div>
        </div>
    );
};

export default Location;