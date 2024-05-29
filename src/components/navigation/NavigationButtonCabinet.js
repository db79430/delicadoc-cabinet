import {Modal, Nav} from "react-bootstrap";
import CustomButton from "../../common/button/Button";
import React, {useState} from "react";
import {IoCloseOutline} from "react-icons/io5";
import {FiMenu} from "react-icons/fi";
import './NavigationMenu.css'

import {RegistrationPopup} from "../../common/registration/popup-registration";
import NestedModal from "../../common/button/Example";
import {CustomPopupNew} from "../../common/popup/Custom-Popup";
import {registrationUser, restorePassword, userAuthenticated, userInfo} from "../../redux/function/function-service";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export const NavigationButtonCabinet = ({token}) => {
        const [openPopupRegistration, setOpenPopupRegistration] = useState(false);
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
            if (formType === 'registration') {
                setOpenPopupRegistration(true);
                setOpenPopupAuth(false);
                setOpenPopupRecovery(false);
            } else if (formType === 'authorization') {
                setOpenPopupAuth(true);
                setOpenPopupRegistration(false);
                setOpenPopupRecovery(false);
            } else if (formType === 'recovery') {
                setOpenPopupRecovery(true);
                setOpenPopupAuth(false);
                setOpenPopupRegistration(false);
            }
        };

        return (
            <>
            <div className="button-container">
                {/*<Nav.Item className="button-word">*/}
                {/*    <CustomButton textColor="green" size="sm" color="primary" text={"Играть"}/>*/}
                {/*</Nav.Item>*/}
                {/*<Nav.Item className="button-word">*/}
                {/*    <CustomButton*/}
                {/*        textColor="white"*/}
                {/*        size="sm"*/}
                {/*        color="green"*/}
                {/*        text={"Войти"}*/}
                {/*        onClick={() => handleButtonClick('registration')}*/}
                {/*    />*/}
            <CustomPopupNew
                formData={formData}
                open={openPopupRegistration}
                onClose={() => setOpenPopupRegistration(false)}
                setFormData={setFormData}
                formType="registration"
                handleOpenPopupAuth={handleOpenPopupAuth}
                handleOpenPopupRecovery={handleOpenPopupRecovery}
            />
            {openPopupAuth && (
                <CustomPopupNew
                    open={openPopupAuth}
                    onClose={() => setOpenPopupAuth(false)}
                    formType="authorization"
                    setFormData={setFormData}
                    formData={formData}
                    handleOpenPopupAuth={handleOpenPopupAuth}
                    handleOpenPopupRecovery={handleOpenPopupRecovery}
                />
            )}
            {openPopupRecovery && (
                <CustomPopupNew
                    open={openPopupRecovery}
                    onClose={() => setOpenPopupRecovery(false)}
                    formType="recovery"
                    setFormData={setFormData}
                    formData={formData}
                    handleOpenPopupAuth={handleOpenPopupAuth}
                    handleOpenPopupRecovery={handleOpenPopupRecovery}
                />
            )}
            {/*</Nav.Item>*/}
    </div>
    </>
    )
        ;
    }
;