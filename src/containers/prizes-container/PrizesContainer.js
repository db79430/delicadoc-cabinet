import {MenuCabinetButtonDown} from "../../components/cabinet/buttons-checks-play/MenuCabinetButtonDown";
import {Prizes} from "../../components/cabinet/prizes/Prizes";
import "./PrizesContainer.css"
import {
    MenuCabinetButtonChecksPlayUp
} from "../../components/cabinet/buttons-checks-play/MenuCabinetButtonChecksPlayUp";

export const PrizesContainer = ({token}) => {
    return (
        <div className="prizes-container-cabinet">
            <MenuCabinetButtonChecksPlayUp/>
            <Prizes token={token}/>
        </div>
    )
}