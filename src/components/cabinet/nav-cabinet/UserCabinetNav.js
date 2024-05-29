import React, {useState} from "react";
import {NavigationMenu} from "../../navigation/NavigationMenu";
import {Nav} from "react-bootstrap";
import CustomButton from "../../../common/button/Button";
import {RegistrationPopup} from "../../../common/registration/popup-registration";
import {FiMenu} from "react-icons/fi";
import "./UserCabinetNav.css"
import {useNavigate} from "react-router-dom";
import NavigationMenuNew from "../../navigation/NavigationMenuNew";

export const UserCabinetNav = ({user_data}) => {
    const [showMenuPopup, setShowMenuPopup] = useState(false);


    return (
        <div className="nav-container-cabinet">
            {/*<NavigationMenu/>*/}
            <NavigationMenuNew user_data={user_data} />
        </div>
    )


}