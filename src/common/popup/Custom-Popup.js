import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Modal, Box, Typography, TextField, Button, Checkbox, FormControlLabel, Card, CardContent} from '@mui/material';
import {IoCloseOutline} from 'react-icons/io5';
import {registrationUser, restorePassword, userAuthenticated, userInfo} from '../../redux/function/function-service';
import CustomButton from '../button/Button';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';

import "./CustomPopup.css"
import {
    CloseButton, FormContainer,
    FormGroup, StyledCheck, StyledContainer, StyledFormControlLabel,
    StyledFormLabel,
    StyledModal,
    StyledTextField,
    StyledTitle,
    StyleModalDialog
} from "./StyledPopup";


export const CustomPopupNew = ({
                                   open,
                                   onClose,
                                   formType,
                                   formData,
                                   setFormData,
                                   handleOpenPopupAuth,
                                   handleOpenPopupRecovery,
                                   token,
                                   context
                               }) => {
        const dispatch = useDispatch();
        const location = useLocation();
        const navigate = useNavigate();


        const handleChange = (e) => {
            const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        };

        const handleSubmit = (formType) => {
            switch (formType) {
                case 'registration':
                    dispatch(registrationUser(formData));
                    break;
                case 'authorization':
                    (async () => {
                        try {
                            const response = await dispatch(userAuthenticated({ email: formData.email, password: formData.password }));
                            if (response) {
                                navigate("/delicadoc-cabinet/cabinet");
                            } else if (response && response.status && response.status === 412) {
                                alert("Неверные данные для входа");
                            }
                        } catch (error) {
                            console.error('Error during authentication:', error);
                            alert('Произошла ошибка при попытке авторизации');
                        }
                    })();
                    break;
                default:
                    console.error('Unknown form type');
            }
        }

    console.log('Navigate function:', navigate);

        const renderFormFields = () => {
            if (formType === 'registration') {
                return (
                    <div>
                        <div>
                            <FormGroup>
                                <StyledFormLabel>Имя</StyledFormLabel>
                                <StyledTextField
                                    placeholder="Введите имя"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    title="Имя"
                                />
                            </FormGroup>
                            <FormGroup>
                                <StyledFormLabel>Фамилия</StyledFormLabel>
                                <StyledTextField
                                    placeholder="Введите фамилию"
                                    name="family_name"
                                    value={formData.family_name}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <StyledFormLabel>Телефон</StyledFormLabel>
                                <StyledTextField
                                    placeholder="+7 (___)___-___-__-__"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <StyledFormLabel>E-mail</StyledFormLabel>
                                <StyledTextField
                                    placeholder="Введите e-mail"
                                    name="email"
                                    value={formData.email || ''}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <StyledFormControlLabel
                                control={<StyledCheck/>}
                                label="Согласие на обработку персональных данных"
                            />
                        </div>
                    </div>
                );
            } else if (formType === 'authorization') {
                return (
                    <>
                        <FormGroup>
                            <StyledFormLabel>E-mail</StyledFormLabel>
                            <StyledTextField
                                placeholder="Введите e-mail"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <StyledFormLabel>Пароль</StyledFormLabel>
                            <StyledTextField
                                placeholder="Введите пароль"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </>
                );
            } else if (formType === 'recovery') {
                return (
                    <>
                        <p className="text-email-recovery">Введите почту, к которой был привязан аккаунт</p>
                        <FormGroup>
                            <StyledFormLabel>E-mail</StyledFormLabel>
                            <StyledTextField
                                placeholder="Введите e-mail"
                                name="email_phone"
                                value={formData.email_phone}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </>
                );
            }
        };

        const modalStyles = {
            registration: {
                height: '700px',
            },
            authorization: {
                height: '500px',
            },
            recovery: {
                height: '400px',
            },
        };
        return (
            <StyleModalDialog open={true} onClose={onClose}>
                <StyledModal sx={modalStyles[formType]}>
                    <Box>
                        <StyledTitle className="modal-title">
                            {formType === 'registration' && 'Регистрация'}
                            {formType === 'authorization' && 'Авторизация'}
                            {formType === 'recovery' && 'Восстановление пароля'}
                        </StyledTitle>
                        <CloseButton onClick={onClose}/>
                    </Box>
                    <StyledContainer>
                        <FormContainer>
                            {renderFormFields()}
                        </FormContainer>
                    </StyledContainer>
                    <Box display="flex" justifyContent="center" padding={2} flexDirection="column">
                        <CustomButton
                            text={formType === 'registration' ? 'РЕГИСТРАЦИЯ' : formType === 'authorization' ? 'ВОЙТИ' : 'ОТПРАВИТЬ'}
                            color="green"
                            textColor="white"
                            size="lr"
                            onClick={() => handleSubmit(formType)}
                        />
                    </Box>
                    {formType === "registration" &&
                        <div className="account-container">
                            <p className="text-account">Уже есть аккаунт?
                                <a onClick={handleOpenPopupAuth} className="auth-text">ВОЙТИ</a>
                            </p>
                        </div>

                    }
                    {
                        formType === "authorization" &&
                        <div className="account-container">
                            <a onClick={handleOpenPopupRecovery} className="text-account">
                                Забыли пароль?
                            </a>
                        </div>
                    }
                </StyledModal>
            </StyleModalDialog>
        );
    }
;

