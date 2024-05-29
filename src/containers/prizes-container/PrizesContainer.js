import {MenuCabinetButtonDown} from "../../components/cabinet/buttons-checks-play/MenuCabinetButtonDown";
import {Prizes} from "../../components/cabinet/prizes/Prizes";
import "./PrizesContainer.css"

export const PrizesContainer = () => {
    return (
        <div className="prizes-container-cabinet">
            <MenuCabinetButtonDown/>
            <Prizes/>
        </div>
    )
}