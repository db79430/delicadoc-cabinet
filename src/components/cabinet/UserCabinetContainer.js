import React, {useEffect} from "react";
import {UserCabinetNav} from "./nav-cabinet/UserCabinetNav";
import {MenuCabinetButtonUp} from "./buttons-menu/MenuCabinetButtonUp";
import {Footer} from "../footer/Footer";
import "./UserCabinetContainer.css"
import "./UserCabinetContainerMedia.css"
import {setUserAuthenticated, setUserInfo, setUserToken} from "../../redux/action/action";
import {getWeekInfoPromo, userAuthenticated, userInfo} from "../../redux/function/function-service";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const UserCabinetContainer = () => {
    const user_data = useSelector(state => state.infoPromo.user_data);
    const navigate = useNavigate();
    const promo = useSelector((state) => state.infoPromo.week_day || []);

    const token = useSelector(state => state.infoPromo.token);

    const dispatch = useDispatch();

    console.log('user_data', user_data)

    useEffect(() => {
        if (token) {
            dispatch(setUserToken(token));
            dispatch(userInfo(token)).then(response => {
                dispatch(setUserInfo(response.data));
                dispatch(setUserAuthenticated(response.data));
            }).catch(error => {
                console.error("Ошибка при получении информации о пользователе:", error);
            });
        }
    }, [dispatch, token]);

    useEffect(() => {
        if (!promo.length) {
            dispatch(getWeekInfoPromo());
        }
    }, [dispatch, promo.length]);


    return (
        <>
            <UserCabinetNav user_data={user_data}/>
            <MenuCabinetButtonUp token={token} user_data={user_data}/>
            <div className="footer">
                <Footer/>
            </div>
        </>
    )
}