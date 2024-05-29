import React, {useEffect} from "react";
import {UserCabinetNav} from "./nav-cabinet/UserCabinetNav";
import {MenuCabinetButtonUp} from "./buttons-menu/MenuCabinetButtonUp";
import {Footer} from "../footer/Footer";
import "./UserCabinetContainer.css"
import "./UserCabinetContainerMedia.css"
import {setUserInfo, setUserToken} from "../../redux/action/action";
import {userAuthenticated, userInfo} from "../../redux/function/function-service";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const UserCabinetContainer = (props) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.infoPromo.token);
    const user_data = useSelector(state => state.infoPromo.user_data);
    const navigate = useNavigate();


    useEffect(() => {
        if (token) {
            dispatch(setUserToken(token))
            console.log('Token updated:', token);
            dispatch(userInfo(token));
        }
    }, [dispatch, token]);


    useEffect(() => {
        if (user_data) {
            dispatch(setUserInfo(user_data));
            dispatch(setUserToken(token));
            console.log('User updated:', user_data);
        }
    }, [user_data, token, dispatch]);


    return (
        <>
            <UserCabinetNav user_data={user_data} />
            <MenuCabinetButtonUp token={token} user_data={user_data}  />
            <div className="footer">
                <Footer/>
            </div>
        </>
    )
}