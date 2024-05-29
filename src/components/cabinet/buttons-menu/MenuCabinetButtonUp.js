import React, {useEffect, useState} from "react";
import "./MenuCabinetButtonUp.css"
import {Profile} from "../profile/Profile";
import CustomButton from "../../../common/button/Button";
import {Col, Row} from "react-bootstrap";
import {PrizesContainer} from "../../../containers/prizes-container/PrizesContainer";
import "./MenuCabinetButtonUpMedia.css"
import {userInfo} from "../../../redux/function/function-service";
import {useDispatch, useSelector} from "react-redux";
import {infoPromoReducer} from "../../../redux/reducers/info-users-reducer";
import {setUserInfo} from "../../../redux/action/action";
import {ProfileNew} from "../profile/ProfileNew";
import {ChecksNew} from "../cheks/ChecksNew";

export const MenuCabinetButtonUp = ({token, user_data}) => {
    const [currentPage, setCurrentPage] = useState('personalData');
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="cabinet-menu-button">
                <div className="cabinet-button">
                    <CustomButton size="dg" color={currentPage === 'personalData' ? 'green' : 'border'}
                                  textColor="white" text={"Персональные данные"}
                                  onClick={() => handlePageChange('personalData')}/>
                </div>
                <div className="cabinet-button">
                    <CustomButton size="dg" color={currentPage === 'checks' ? 'green' : 'border'}
                                  textColor="white" text={"Чеки"}
                                  onClick={() => handlePageChange('checks')}
                    />
                </div>
                <div className="cabinet-button">
                    <CustomButton size="dg" color={currentPage === 'prizes' ? 'green' : 'border'}
                                  textColor="white" text={"Призы"}
                                  onClick={() => handlePageChange('prizes')}
                    />
                </div>
            </div>
            <div className="data-cabinet">
                {currentPage === 'personalData' && <ProfileNew token={token} user_data={user_data}/>}
                {currentPage === 'checks' && <ChecksNew token={token}/>}
                {currentPage === 'prizes' && <PrizesContainer/>}
            </div>
        </div>
    )

}