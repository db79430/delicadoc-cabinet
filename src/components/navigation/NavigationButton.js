import {Modal, Nav} from "react-bootstrap";
import CustomButton from "../../common/button/Button";
import React, {useEffect, useState} from "react";
import {IoCloseOutline} from "react-icons/io5";
import {FiMenu} from "react-icons/fi";
import './NavigationMenu.css'

import {RegistrationPopup} from "../../common/registration/popup-registration";
import NestedModal from "../../common/button/Example";
import {CustomPopupNew} from "../../common/popup/Custom-Popup";
import {registrationUser, restorePassword, userAuthenticated, userInfo} from "../../redux/function/function-service";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

export const NavigationButton = () => {
        const [openPopupRegistration, setOpenPopupRegistration] = useState(true);
        const [openPopupAuth, setOpenPopupAuth] = useState(false);
        const [openPopupRecovery, setOpenPopupRecovery] = useState(false);
        const [formData, setFormData] = useState({
            first_name: '',
            family_name: '',
            email: '',
            email_phone: '',
            phone: '',
            password: '',
            token: '',
            formType: ''
        });

        const handleOpenPopupAuth = () => {
            setOpenPopupAuth(true);
            setOpenPopupRegistration(false)
        }

        const handleOpenPopupRecovery = () => {
            setOpenPopupRecovery(true)
            setOpenPopupAuth(false);

        }

    const handleButtonClick = (formType) => {
        switch (formType) {
            case 'registration':
                setOpenPopupRegistration(false);
                setOpenPopupAuth(true);
                break;
            case 'authorization':
                setOpenPopupAuth(false);
                setOpenPopupRegistration(true);
                break;
            case 'recovery':
                setOpenPopupRecovery(false);
                setOpenPopupAuth(true);
                break;
            default:
                console.error('Unknown form type');
        }
    };


    return (
            <>
                <div className="button-container">
                    <Nav.Item className="button-word">
                        <CustomButton textColor="green" size="sm" color="primary" text={"Играть"}/>
                    </Nav.Item>
                    <Nav.Item className="button-word">
                        {/*<CustomButton*/}
                        {/*    textColor="white"*/}
                        {/*    size="sm"*/}
                        {/*    color="green"*/}
                        {/*    text={"Войти"}*/}
                        {/*    onClick={() => handleButtonClick('registration')}*/}
                        {/*/>*/}
                        {openPopupRegistration && (
                            <CustomPopupNew
                                formData={formData}
                                open={openPopupRegistration}
                                onClose={() => handleButtonClick("authorization")}
                                setFormData={setFormData}
                            />
                        )}
                        {openPopupAuth && (
                            <CustomPopupNew
                                open={openPopupAuth}
                                onClose={() => handleButtonClick("registration")}
                                setFormData={setFormData}
                                formData={formData}
                            />
                        )}
                        {openPopupRecovery && (
                            <CustomPopupNew
                                open={openPopupRecovery}
                                onClose={() => handleButtonClick("authorization")}
                                setFormData={setFormData}
                                formData={formData}
                                setOpenPopupRecovery={setOpenPopupRecovery}
                            />
                        )}
                    </Nav.Item>
                </div>
            </>
        );
    }
;