import React, {useState} from "react";
import './Winprizes.css'
import './WinprizesMedia.css'
import rectlange from "../winprizes/img/reclange.svg"
import CustomButton from "../../common/button/Button";
import {CustomSliderFive} from "../../common/slider/five/CustomSliderFive";
import {CustomSliderPerek} from "../../common/slider/perekrestok/CustomSliderPerek";


const CustomShape = () => (
    <div className="shape-container">
        <div className="shape"></div>
    </div>
);
export const WinPrizes = () => {
    const [activeSlider, setActiveSlider] = useState(null);

    const handleButtonClick = (slider) => {
        setActiveSlider(slider);
    };
    return (
        <div className="promo-block">
            <h1 className="how-prizes-text">Как выиграть призы?</h1>
            <div className="steps-container">
                <div className="steps">
                    <div className="step">
                        <div className="step-text-container">
                            <p className="step-number">1.</p>
                            <p className="step-text">ПОКУПАЙТЕ</p>
                            <p className="step-name">Delicados Nachos</p>
                        </div>
                        <img src={rectlange} className="rectlange-img"/>
                    </div>
                    <div className="step">
                        <div className="step-text-container">
                            <p className="step-number">2.</p>
                            <p className="step-text">РЕГИСТРИРУЙТЕ</p>
                            <p className="step-name">чеки с 15.05.2024 по 15.07.2024</p>
                        </div>
                        <img src={rectlange} className="rectlange-img"/>
                    </div>
                    <div className="step">
                        <div className="step-text-container">
                            <p className="step-number">3.</p>
                            <p className="step-text">ПОЛУЧАЙТЕ</p>
                            <p className="step-name">гарантированные призы</p>
                        </div>
                        <img src={rectlange} className="rectlange-img"/>
                    </div>
                    <div className="step">
                        <div className="step-text-container">
                            <p className="step-number">4.</p>
                            <p className="step-text">ВЫИГРЫВАЙТЕ</p>
                            <p className="step-name">ценные призы</p>
                        </div>
                        <img src={rectlange} className="rectlange-img"/>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <div>
                    <CustomButton textColor="white" size="md"
                                  color="green"
                                  text={'Пятерочка'}
                                  onClick={() => handleButtonClick('five')}

                    />
                </div>
                <div>
                    <CustomButton size="md" color="border" text={'Перекресток'}
                                  onClick={() => handleButtonClick('perek')}

                    />
                </div>
            </div>
            <div className="slider-container">
                {activeSlider === 'five' ? <CustomSliderFive /> : <CustomSliderPerek />}
            </div>
        </div>
)

}