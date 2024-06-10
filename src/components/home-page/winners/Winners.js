import React from "react";
import "./Winners.css"
import {WinnersTable} from "./winners-table/WinnersTable";
import {Grid} from "@mui/material";
import CustomButton from "../../../common/button/Button";

const weekText = {
    one_week: "1 неделя",
    two_week: "2 неделя",
    three_week: "3 неделя",
    four_week: "4 неделя",
    five_week: "5 неделя",
    six_week: "6 неделя",
    seven_week: "7 неделя",
    eight_week: "8 неделя"
}
export const Winners = () => {
    return (
        <div>
            <div className="winners-item">
                <h1 className="text-item">Победители</h1>
            </div>
            <div className="button-grid">
                <CustomButton size="rg" color="border" textColor="white" text={weekText.one_week} />
                <CustomButton size="rg" color="border" textColor="white" text={weekText.two_week} />
                <CustomButton size="rg" color="border" textColor="white" text={weekText.three_week} />
                <CustomButton size="rg" color="border" textColor="white" text={weekText.four_week} />
                <CustomButton size="rg" color="border" textColor="white" text={weekText.five_week} />
                <CustomButton size="rg" color="border" textColor="white" text={weekText.six_week} />
                <CustomButton size="rg" color="border" textColor="white" text={weekText.seven_week} />
                <CustomButton size="rg" color="border" textColor="white" text={weekText.eight_week} />
            </div>
            <WinnersTable/>
        </div>
    )
}