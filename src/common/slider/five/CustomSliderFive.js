import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image3925 from "../img/image3925.svg"
import image3926 from "../img/image3926.svg"
import image3927 from "../img/image3927.svg"
import image3930 from "../img/image3930.svg"
import image3910 from "../img/image3910.svg"
import image3931 from "../img/image3931.svg"
import mobilemoney from "../img/mobilemoney1.svg"
import "./CustomSliderFive.css"


export const checkText = {
    one: "1 чек",
    two: "2 чека",
    three: "3 чека",
    four: "4 чека",
    prize: "Главный приз"
}

export const CustomSliderFive = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '0',
    };

    const slides = [
        { image: image3925, text: checkText.one, description: 'Подарочный сертификат «Пятёрочка» на 2000 рублей' },
        { image: image3926, text: checkText.two, description: 'Тревел Сертификат от «tutu» на 4000 рублей'  },
        { image: image3927, text: checkText.two, description: 'Колонка Яндекс Мини' },
        { image: image3930, text: checkText.three, description: 'Чемодан Samsonite' },
        { image: image3910, text: checkText.four , description: 'iPhone 15 Pro' },
        { image: image3931, text: checkText.prize, description: 'Путешествие в Мексику' },
        { image: mobilemoney, text: checkText.one, description: 'Деньги на телефон (20 р)' },
    ];

    return (
        <div className="slider-main">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div className="slide" key={index}>
                        <div className="slide-content">
                            <div className="circle">
                                <p className="slide-text">
                                    {slide.text}
                                </p>
                            </div>
                            <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
                        </div>
                        <p className="slide-description">{slide.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}