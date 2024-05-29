import CustomButton from "../../../common/button/Button";
import React from "react";
import "./MenuCabinetButtonDown.css"

export const MenuCabinetButtonDown = () => {
    return (
        <div className="cabinet-menu-button">
            <div className="cabinet-button">
                <CustomButton size="dg" color="yellow" textColor="brown" text={"Загрузить чек"} />
            </div>
            <div className="cabinet-button">
                <CustomButton size="dg" color="yellow" textColor="brown" text={"Играть в игру"} />
            </div>
            <div className="cabinet-button">
                <CustomButton size="dg" color="yellow" textColor="brown" text={"Обменять баллы"} />
            </div>
        </div>
    )
}