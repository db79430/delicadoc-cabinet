import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './ConveyorBelt.css';

// Импортируйте изображения чемоданов и призов
import openSuitcase1 from './img/чемодан_открытый_желтый.svg';
import openSuitcase2 from './img/чемодан_открытый_зеленый.svg';
import openSuitcase3 from './img/чемодан_открытый_красный.svg';
import prize1 from './img/mockup_delicados&BK__3-PhotoRoom.svg';
import CustomButton from "../../common/button/Button";

const openSuitcases = [openSuitcase1, openSuitcase2, openSuitcase3];

const prizes = [
    { src: prize1, points: 1 },
];

export const ConveyorBelt = ({ closedSuitcases }) => {
    const totalTime = 45; // Общее время в секундах
    const stopTime = 20; // Время остановки в секундах при открытии приза
    const duration = 10000 // Длительность анимации в миллисекундах
    const totalSuitcases = closedSuitcases.length;
    const containerWidth = `${totalSuitcases * 100}%`; // Ширина контейнера равна сумме ширин всех чемоданов
    const [stopAnimation, setStopAnimation] = useState(false); // Состояние для остановки анимации
    const [clickedSuitcaseIndex, setClickedSuitcaseIndex] = useState(null); // Индекс кликнутого чемодана
    const [randomOpenSuitcase, setRandomOpenSuitcase] = useState(null); // Случайное изображение открытого чемодана
    const [randomPrize, setRandomPrize] = useState(null); // Случайный приз
    const [points, setPoints] = useState(0); // Баллы за приз
    const [timeLeft, setTimeLeft] = useState(totalTime); // Оставшееся время
    const [isPaused, setIsPaused] = useState(false); // Состояние для паузы

    useEffect(() => {
        let timer;
        if (timeLeft > 0 && !stopAnimation && !isPaused) {
            timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else if (timeLeft <= 0) {
            setStopAnimation(true); // Останавливаем анимацию при окончании времени
        }
        return () => clearTimeout(timer);
    }, [timeLeft, stopAnimation, isPaused]);

    // Обработчик клика на чемодан
    const handleSuitcaseClick = (index) => {
        setIsPaused(true); // Останавливаем таймер при клике на чемодан
        setStopAnimation(true); // Останавливаем анимацию при клике на чемодан
        setClickedSuitcaseIndex(index); // Устанавливаем индекс кликнутого чемодана
        const randomIndex = Math.floor(Math.random() * openSuitcases.length); // Генерируем случайный индекс для открытого чемодана
        setRandomOpenSuitcase(openSuitcases[randomIndex]); // Устанавливаем случайный открытый чемодан

        // Вероятность показа приза, например 50%
        const shouldShowPrize = Math.random() < 0.5;

        if (shouldShowPrize) {
            const randomPrizeIndex = Math.floor(Math.random() * prizes.length); // Генерируем случайный индекс для приза
            setRandomPrize(prizes[randomPrizeIndex]); // Устанавливаем случайный приз
            setPoints(prizes[randomPrizeIndex].points); // Устанавливаем баллы за приз
        } else {
            setRandomPrize(null); // Не показываем приз
            setPoints(0); // Сбрасываем баллы
        }

        // Устанавливаем таймер для продолжения игры через stopTime секунд
        setTimeout(() => {
            setIsPaused(false);
            setStopAnimation(false); // Возобновляем анимацию через 20 секунд
        }, stopTime * 1000);
    };

    const handleContinue = () => {
        setIsPaused(false); // Возобновляем таймер
        setStopAnimation(false); // Возобновляем анимацию
        setClickedSuitcaseIndex(null); // Сбрасываем индекс кликнутого чемодана
        setRandomOpenSuitcase(null); // Скрываем открытый чемодан
        setRandomPrize(null); // Скрываем приз
        setPoints(0); // Сбрасываем баллы
    };

    const animationProps = useSpring({
        from: { transform: 'translateX(0%)' },
        to: { transform: stopAnimation ? 'translateX(0%)' : 'translateX(-100%)' },
        config: { duration: duration },
        reset: true,
        loop: { reverse: true },
    });

    return (
        <div className="conveyor-belt">
            <div className="timer">
                {timeLeft}
            </div>
            <div>
                <animated.div
                    style={{
                        ...animationProps,
                        position: 'relative',
                        width: containerWidth,
                        height: '100%', // Высота контейнера
                        overflow: 'hidden', // Скрытие чемоданов, которые выходят за пределы контейнера
                        display: 'flex', // Установка flex для контейнера
                    }}
                >
                    {closedSuitcases.map((suit, index) => (
                        <div
                            key={index}
                            style={{
                                position: 'relative',
                                width: `${100 / totalSuitcases}%`, // Равномерное распределение чемоданов по горизонтали
                                height: '100%', // Высота чемодана
                            }}
                        >
                            <img
                                src={suit}
                                alt="Чемодан"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                className="suitcases-img"
                                onClick={() => handleSuitcaseClick(index)} // Добавляем обработчик клика на чемодан
                            />
                            {stopAnimation && index === clickedSuitcaseIndex && randomOpenSuitcase && ( // Отображаем случайный открытый чемодан поверх кликнутого чемодана
                                <>
                                    <img
                                        src={randomOpenSuitcase}
                                        alt="Открытый чемодан"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            zIndex: 999, // Устанавливаем z-index, чтобы изображение было поверх других чемоданов
                                        }}
                                    />
                                    {randomPrize && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                zIndex: 1000, // Устанавливаем z-index выше, чтобы приз был поверх всего
                                                textAlign: 'center',
                                            }}
                                        >
                                            <img
                                                src={randomPrize.src}
                                                alt="Приз"
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
                                                }}
                                            />
                                            <div style={{color: 'white', marginTop: '10px'}}>
                                                {points} балл{points > 1 ? 'ов' : ''}
                                            </div>
                                        </div>
                                    )}
                                    <CustomButton
                                        size="ms"
                                        textColor="white"
                                        color="green"
                                        text="Продолжить"
                                        onClick={handleContinue}
                                        style={{
                                            position: 'absolute',
                                            top: '80%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            padding: '10px 20px',
                                            fontSize: '16px',
                                            cursor: 'pointer',
                                            zIndex: 1001,
                                        }}
                                    />
                                </>
                            )}
                        </div>
                    ))}
                </animated.div>
            </div>
        </div>
    );
};

