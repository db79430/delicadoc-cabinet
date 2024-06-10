import React from "react";
import "./PlayInfo.css"
import line from ".//img/line.svg"
import {Box, Grid} from "@mui/material";
import nachos from ".//img/nachoc+bag.svg"
import vector from ".//img/vector-burger.svg"
import vopper from ".//img/vopper.svg"
import bk from ".//img/bk.svg"
import CustomButton from "../../common/button/Button";



export const PlayInfo = () => {
    return (
        <div>
            <Grid container direction="row" alignItems="center" className="container">
                <h1 className="text-item">Играйте и выйгрывайте вкусные призы</h1>
                <div className="line-container">
                    <img src={line}/>
                    <div className="container-circle">
                        <div className="circle">
                            <p className="number-circle">1</p>
                        </div>
                        <p className="text-under-circle">Запускайте игру</p>
                    </div>
                    <div className="container-circle-2">
                        <div className="circle">
                            <p className="number-circle">2</p>
                        </div>
                        <p className="text-under-circle">Кликайте на чемоданы</p>
                    </div>
                    <div className="container-circle-3">
                        <div className="circle">
                            <p className="number-circle">3</p>
                        </div>
                        <p className="text-under-circle">Ищите
                            Delicados Nachos «Бургер Воппер»</p>
                    </div>
                    <div className="container-circle-4">
                        <div className="circle">
                            <p className="number-circle">4</p>
                        </div>
                        <p className="text-under-circle">Копите баллы</p>
                    </div>
                    <div className="container-circle-5">
                        <div className="circle">
                            <p className="number-circle">5</p>
                        </div>
                        <p className="text-under-circle">Обменивайте на купоны
                            Бургер Кинг</p>
                    </div>
                </div>
            </Grid>
            <Grid container spacing={6} direction="row" alignItems="center">
                <Grid item xs={6} md={4}>
                    <img src={nachos}/>
                </Grid>
                <Grid item xs={6} md={4}>
                    <div className="play-button">
                        <CustomButton text={"играть"}
                                      color="green"
                                      textColor="white"
                                      size="lg"/>
                        <p className="check">1 ЧЕК = 1 ИГРА</p>
                    </div>
                </Grid>
                <Grid item xs={6} md={4}>
                    <div className="vopper-container">
                        <img className="vector-burger" src={vector} alt="Vector"/>
                        <img className="vopper" src={vopper} alt="Vopper"/>
                        <img className="bk" src={bk} alt="BK"/>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}
