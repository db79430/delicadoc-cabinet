import {Grid} from "@mui/material";
import beanbag from "./img/group46.svg";
import CustomButton from "../../../common/button/Button";
import cactusleft from "./img/Group4712.svg";
import cactus from "./img/Group.svg";
import cactusright from "./img/Group4711.svg";
import React from "react";
import "./AskQuestion.css"

export const AskQuestion = () => {
    return (
        <>
            <div className="askquestion-container">
                <div className="left-img">
                    <img src={beanbag}/>
                </div>
                <div className="button-question">
                    <CustomButton text={"Задать вопрос"}
                                  color="border"
                                  textColor="white"
                                  size="lg"
                    />
                </div>
                <div className="img-cactus">
                    <img src={cactusleft}/>
                    <img src={cactus}/>
                    <img src={cactusright}/>
                </div>
            </div>
        </>
    )
}