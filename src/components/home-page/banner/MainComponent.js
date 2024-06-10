import React from "react";
import Container from 'react-bootstrap/Container';
import chips from "../banner/img/chips.png"
import iconTg from "../banner/img/icons-tg.svg"
import vector from "../banner/img/vector-1.svg"
import logo5ka from "../banner/img/лого_5ка.svg"
import logoPerek from "../banner/img/лого_перекресток.svg"
import shadowWhite from "./img/white.svg"
import substract from "../banner/img/Subtract.svg"
import airplane from "../banner/img/airplane.svg"
import mexico from "../banner/img/Мексика.svg"
import "./MainComponent.css"
import "./MainComponentMedia.css"
import {WinPrizes} from "../winprizes/WinPrizes";
import {Col, Row} from "react-bootstrap";
import CustomButton from "../../../common/button/Button";


export const MainComponent = () => {
    const redirectToSite = () => {
        window.location.href = 'https://delicados-promo.ru';
    };
    return (
        <>
            <div className="main-container">
                <div className="image-container-main">
                    <img src={vector} className="image-vector"/>
                    <img src={chips} className="chips-main"/>
                    <div className="text_under">Лимитированный вкус только в «Пятёрочке» и «Перекрёстке»</div>
                    <div className="logo-container">
                        <img src={logo5ka} className="logo"/>
                        <img src={logoPerek} className="logo"/>
                    </div>
                </div>
                <div className="burger-container">
                    <p className="title-burger">Вперед</p>
                    <p className="title-burger">c Бургер Кинг</p>
                    <p className="title-burger">к приключениям!</p>
                    <div className="register-check">
                        <p className="register-text">РЕГИСТРИРУЙ ЧЕК</p>
                        <div className="button-web">
                            <CustomButton textColor="green"
                                          size="sm"
                                          color="primary" text={"на сайте"}
                                          onClick={redirectToSite}/>
                        </div>
                        <div className="icon-image">
                            <img className="tg" src={iconTg}
                                 width={40}
                                 height={40}/>
                        </div>
                    </div>
                    <div className="register-check">
                        <p className="register-text">ИГРАЙТЕ И ВЫЙГРЫВАЙТЕ ВКУСНЫЕ ПРИЗЫ</p>
                    </div>
                    <div className="prize-row">
                        <div className="prize-text">
                            Главный приз: путешествие в МЕКСИКУ на
                            <a className="prize-item">500 000</a>
                            рублей
                        </div>
                        <img src={airplane} className="airoplane-img"/>
                        <img src={mexico} className="mexico-img"/>
                    </div>
                </div>
            </div>
            {/*<div className="win-container">*/}
            {/*    <WinPrizes/>*/}
            {/*</div>*/}
        </>

    )

}