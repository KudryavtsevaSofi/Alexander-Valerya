import { useEffect, useState } from 'react';
import '../assets/styles/main.css';
import Heart1 from '../assets/images/heart1.png';
import Greeting from '../components/greeting';
import Guess from '../components/guess';
import Location from '../components/location';

const MainPage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
    // Проверяем ширину экрана при загрузке и при изменении размера окна
        const mediaQuery = window.matchMedia('(max-width: 800px)');

        const handleMediaChange = (e) => {
        setIsMobile(e.matches);
        };

        setIsMobile(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleMediaChange);

        return () => {
        mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    return (
        <div className="page-wrapper">
            {isMobile ? (
            <div className='mobile-display'>
                <Greeting/>
                <Guess/>
                <Location/>
            </div>
            ) : (
            <div className='desktop-display'>
                <div className="desktop-content">
                    <p className='desktop-text'>Пожалуйста, откройте сайт <br/>через мобильное устройство</p>
                    <img src={Heart1} className='desktop-heart' alt="Сердечко" />
                </div>
            </div>
            )}
        </div>
    )
}

export default MainPage;