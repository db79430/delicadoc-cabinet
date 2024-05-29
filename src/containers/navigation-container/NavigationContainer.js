import React, {useEffect, useState} from "react";
import {NavigationMenu} from "../../components/navigation/NavigationMenu";
import {NavigationButton} from "../../components/navigation/NavigationButton";
import "./NavigationContainer.css"
import {registrationUser, restorePassword, userAuthenticated} from "../../redux/function/function-service";
import NavigationMenuNew from "../../components/navigation/NavigationMenuNew";

export const NavigationContainer = () => {
    return (
        <div className="navigation-container">
            <NavigationMenu/>
            <NavigationButton/>
        </div>
    )
}