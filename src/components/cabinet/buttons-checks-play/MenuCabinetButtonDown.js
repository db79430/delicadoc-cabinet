import CustomButton from "../../../common/button/Button";
import React, {useState} from "react";
import "./MenuCabinetButtonDown.css"
import {CustomPopupChecks} from "../../../common/popup-checks/CustomPopupChecks";
import {CustomPopupPoints} from "../../../common/popup-points/CustomPopupPoints";

export const MenuCabinetButtonDown = ({ token }) => {
    const [openPopupLoadingChecks, setOpenPopupLoadingChecks] = useState(false)
    const [openPopupExchangePoints, setOpenPopupExchangePoints] = useState(false)

    const handleOpenPopupChecks = () => {
        setOpenPopupLoadingChecks(true)
    }

    const handleOpenPopupPoints = () => {
        setOpenPopupExchangePoints(true)
    }

    return (
        <div className="cabinet-menu-button">
            <div className="cabinet-button">
                <CustomButton size="dg"
                              color="yellow"
                              textColor="brown"
                              text={"Загрузить чек"}
                              onClick={handleOpenPopupChecks}
                />
            </div>
            <div className="cabinet-button">
                <CustomButton size="dg" color="yellow" textColor="brown" text={"Играть в игру"} />
            </div>
            <div className="cabinet-button">
                <CustomButton size="dg" color="yellow"
                              textColor="brown"
                              text={"Обменять баллы"}
                              onClick={handleOpenPopupPoints}
                />
            </div>
            {
                openPopupLoadingChecks && <CustomPopupChecks token={token} open={openPopupLoadingChecks}
                                                             onClose={() => setOpenPopupLoadingChecks(false)}

                />
            }
            {
                openPopupExchangePoints && <CustomPopupPoints token={token} open={openPopupExchangePoints}
                onClose={() => setOpenPopupExchangePoints(false)}
                />
            }
        </div>
    )
}