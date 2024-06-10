import {Modal, Nav} from "react-bootstrap";
import CustomButton from "../../common/button/Button";
import React, {useEffect, useState} from "react";
import {IoCloseOutline} from "react-icons/io5";
import {FiMenu} from "react-icons/fi";
import './NavigationMenu.css'

import {RegistrationPopup} from "../../common/registration/popup-registration";
import NestedModal from "../../common/button/Example";
import {CustomPopupAuth} from "../../common/popup-auth/CustomPopupAuth";
import {registrationUser, restorePassword, userAuthenticated, userInfo} from "../../redux/function/function-service";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


export const NavigationButtonCabinet = ({ token }) => {
    const [openPopupRegistration, setOpenPopupRegistration] = useState(false);
    const [openPopupAuth, setOpenPopupAuth] = useState(false);
    const [openPopupRecovery, setOpenPopupRecovery] = useState(false);
    const [currentForm, setCurrentForm] = useState(null);
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

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentForm('registration');
    }, []);

    const handleClose = () => {
        console.log(`handleClose called`);
        setCurrentForm("authorization");
    };

    const handleButtonClick = (formType) => {
        console.log(`handleButtonClick called with formType: ${formType}`);
        setCurrentForm(formType);
    };

    const handleResponse = (response, successAction, errorMessage) => {
        if (response) {
            if (typeof successAction === 'string') {
                console.log(`Navigating to: ${successAction}`);
                navigate(successAction);
            } else if (typeof successAction === 'function') {
                successAction();
            }
        } else {
            alert(errorMessage);
        }
    };

    const handleSubmit = async (formType) => {
        console.log(`handleSubmit called with formType: ${formType}`);
        try {
            let response;
            switch (formType) {
                case 'registration':
                    response = await dispatch(registrationUser(formData));
                    handleResponse(response, 'authorization', 'Участник с таким E-mail уже существует');
                    break;
                case 'authorization':
                    response = await dispatch(userAuthenticated({
                        email: formData.email,
                        password: formData.password
                    }));
                    handleResponse(response, '/delicadoc-cabinet/cabinet', 'Неверные данные для входа');
                    return response;
                case 'recovery':
                    response = await dispatch(restorePassword({ email_phone: formData.email_phone }));
                    handleResponse(response, 'authorization', 'Неверные данные для входа');
                    break;
                default:
                    console.error('Unknown form type');
            }
        } catch (error) {
            console.error(`Error during ${formType}:`, error);
            alert(`Произошла ошибка при попытке ${formType}`);
        }
    };

    return (
        <div className="button-container">
            {currentForm === 'registration'  && (
                <CustomPopupAuth
                    formData={formData}
                    open={true}
                    onClose={handleClose}
                    setFormData={setFormData}
                    formType="registration"
                    handleSubmit={handleSubmit}
                />
            )}
            {currentForm === 'authorization' && (
                <CustomPopupAuth
                    open={true}
                    onClose={handleClose}
                    formType="authorization"
                    setFormData={setFormData}
                    formData={formData}
                    handleSubmit={handleSubmit}
                />
            )}
            {currentForm === 'recovery' && (
                <CustomPopupAuth
                    open={true}
                    onClose={handleClose}
                    formType="recovery"
                    setFormData={setFormData}
                    formData={formData}
                    handleSubmit={handleSubmit}
                />
            )}
        </div>
    );
};