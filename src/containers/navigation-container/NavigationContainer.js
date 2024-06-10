import React, {useEffect, useState} from "react";
import "./NavigationContainer.css"
import {registrationUser, restorePassword, userAuthenticated} from "../../redux/function/function-service";
import NavigationMenuNew from "../../components/navigation/NavigationMenuNew";
import {NavigationButtonCabinet} from "../../components/navigation/NavigationButtonCabinet";

export const NavigationContainer = () => {
    return (
        <div className="navigation-container">
            {/*<NavigationMenu/>*/}
            <NavigationButtonCabinet/>
        </div>
    )
}