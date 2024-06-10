// import React, { useState, useEffect } from 'react';
// import { Animate } from 'react-move';
// import { easeLinear } from 'd3-ease';
// import './SuitcaseGame.css'; // Подключаем файл стилей
//
// // Импортируем изображения чемоданов
//
//
// import openSuitcase1 from './img/чемодан_открытый_зеленый.svg';
// import openSuitcase2 from './img/чемодан_открытый_красный.svg';
// import openSuitcase3 from './img/чемодан_открытый_желтый.svg';
// import prize from './img/Футболка+ шорты.svg';
//
// const Suitcase = ({ x, hasPrize, onClick }) => (
//     <Animate
//         start={{ x: -100 }}
//         enter={{
//             x: [x],
//             timing: { duration: 5000, ease: easeLinear },
//         }}
//     >
//         {({ x }) => (
//             <img
//                 src={hasPrize ? openSuitcase1 : closedSuitcase1}
//                 alt="Чемодан"
//                 onClick={onClick}
//                 style={{
//                     position: 'absolute',
//                     top: '0',
//                     left: `${x}%`,
//                 }}
//             />
//         )}
//     </Animate>
// );
//
// export const SuitcaseGame = () => {
//     const [score, setScore] = useState(0);
//     const [timeLeft, setTimeLeft] = useState(45);
//     const [prizeModalOpen, setPrizeModalOpen] = useState(false);
//     const [prizeName, setPrizeName] = useState('');
//     const [prizePoints, setPrizePoints] = useState(0);
//
//     // Функция для открытия модального окна с призом
//     const openPrizeModal = (name, points) => {
//         setPrizeName(name);
//         setPrizePoints(points);
//         setPrizeModalOpen(true);
//     };
//
//     // Функция для закрытия модального окна с призом
//     const closePrizeModal = () => {
//         setPrizeModalOpen(false);
//     };
//
//     // Функция для уменьшения времени
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setTimeLeft(prevTime => prevTime - 1);
//         }, 1000);
//
//         // Остановить таймер при достижении нуля
//         if (timeLeft === 0) {
//             clearInterval(timer);
//         }
//
//         // Очистить таймер после завершения
//         return () => clearInterval(timer);
//     }, [timeLeft]);
//
//     // Функция для обработки клика по чемодану
//     const handleClick = (hasPrize) => {
//         // Увеличить счет, если в чемодане есть приз
//         if (hasPrize) {
//             setScore(prevScore => prevScore + 1);
//             openPrizeModal('Название приза', 10); // Предполагается, что здесь будет логика определения приза и его баллов
//         }
//     };
//
//     return (
//         <div>
//             <div>Осталось времени: {timeLeft} секунд</div>
//             <div>Счет: {score}</div>
//             <div className="suitcase-container">
//                 <Suitcase x={10} hasPrize={true} onClick={() => handleClick(true)} />
//                 <Suitcase x={30} hasPrize={false} onClick={() => handleClick(false)} />
//                 {/* Добавьте остальные чемоданы с разными x-координатами и наличием приза */}
//             </div>
//             {/*<Modal isOpen={prizeModalOpen} onClose={closePrizeModal}>*/}
//             {/*    <h2>{prizeName}</h2>*/}
//             {/*    <p>Вы выиграли {prizePoints} баллов!</p>*/}
//             {/*    <img src={prize} alt="Приз" />*/}
//             {/*</Modal>*/}
//         </div>
//     );
// };
