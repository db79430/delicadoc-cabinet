import React from 'react';
import closedSuitcase from './img/Футболка+ шорты.svg';
import openSuitcase from './img/чемодан_открытый_зеленый.svg';
import prize from './img/Ч5.svg';
import './Suitcase.css';

const Suitcase = ({ suitcase, onClick }) => {
    return (
        <div className="suitcase" onClick={onClick}>
            <img
                src={
                    suitcase.isOpen
                        ? suitcase.hasPrize
                            ? prize
                            : openSuitcase
                        : closedSuitcase
                }
                alt="Suitcase"
            />
        </div>
    );
};

export default Suitcase;