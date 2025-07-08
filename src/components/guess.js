import '../assets/styles/guess.css';
import Collage3 from '../assets/images/collage3.jpg';
import HeartCollage from '../assets/images/heart4.png'; 

const Guess = () => {
    return (
        <div className="guess-wrap">
            <div className="text-block">
                <p className="title">Уже догадались?</p>
                <p className='main-text'>
                    Эти милые малыши - это мы в детстве! Кажется, что совсем недавно мы делали свои первые шаги, 
                    а уже сегодня приглашаем вас стать свидетелями важного события в нашей жизни
                </p>
            </div>
            <div className="photo-block">
                <div className='decorate-imgs'>
                    <img className='heart-high' src={HeartCollage} alt="Сердечко" />
                </div>
                <div className='collage-block'>
                    <img className='collage' src={Collage3} alt="Коллаж" />
                </div>
                <div className='background-t'>
                    <p className="background-text">это по любви</p>
                    <p className="background-text">это по любви</p>
                    <p className="background-text-red">это по любви</p>
                </div>
            </div>
        </div>
    );
};

export default Guess;