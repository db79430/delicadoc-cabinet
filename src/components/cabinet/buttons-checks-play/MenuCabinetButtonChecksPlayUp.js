import CustomButton from "../../../common/button/Button";
import React, {useState} from "react";
import "./MenuCabinetButtonDown.css"
import {CustomPopupChecks} from "../../../common/popup-checks/CustomPopupChecks";

export const MenuCabinetButtonChecksPlayUp = ({token}) => {
    const [openPopupLoadingChecks, setOpenPopupLoadingChecks] = useState(false)
    const handleOpenPopupChecks = () => {
        setOpenPopupLoadingChecks(true)
    }

    return (
        <div className="cabinet-menu-button">
            <div className="cabinet-button">
                <CustomButton size="dg" color="yellow"
                              textColor="brown"
                              text={"Загрузить чек"}
                              onClick={handleOpenPopupChecks}/>
            </div>
            <div className="cabinet-button">
                <CustomButton size="dg" color="yellow" textColor="brown" text={"Играть в игру"} />
            </div>
            {
                openPopupLoadingChecks && <CustomPopupChecks token={token} open={openPopupLoadingChecks}
                                                             onClose={() => setOpenPopupLoadingChecks(false)}
                />
            }
        </div>
    )
}