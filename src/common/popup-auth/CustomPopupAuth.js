import React, {useEffect, useState} from 'react';
import {Modal, Box, Typography, TextField, Button, Checkbox, FormControlLabel, Card, CardContent} from '@mui/material';
import CustomButton from '../button/Button';

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


export const CustomPopupAuth = ({
                                    onClose,
                                    formData,
                                    setFormData,
                                    open,
                                    handleSubmit
                                }) => {


        const [formTypes, setFormTypes] = useState("registration");
        const [agreementChecked, setAgreementChecked] = useState(true);

        const handleButtonClick = (newFormType) => {
            setFormTypes(newFormType);
        };


        const handleChange = (e) => {
            const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        };


        const renderFormFields = () => {
            if (formTypes === 'registration') {
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
                                    required={true}
                                />
                            </FormGroup>
                            <StyledFormControlLabel
                                control={<StyledCheck required={true}
                                                      checked={agreementChecked}
                                                      onChange={(e) => setAgreementChecked(e.target.checked)}
                                />}
                                label="Согласие на обработку персональных данных"
                            />
                        </div>
                    </div>
                );
            } else if (formTypes === 'authorization') {
                return (
                    <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">>
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
                    </Box>
                );
            } else if (formTypes === 'recovery') {
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
            <StyleModalDialog open={open} onClose={onClose}>
                <StyledModal sx={modalStyles[formTypes]}>
                    <Box>
                        <StyledTitle className="modal-title">
                            {formTypes === 'registration' && 'Регистрация'}
                            {formTypes === 'authorization' && 'Авторизация'}
                            {formTypes === 'recovery' && 'Восстановление пароля'}
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
                            text={formTypes === 'registration' ? 'РЕГИСТРАЦИЯ' : formTypes === 'authorization' ? 'ВОЙТИ' : 'ОТПРАВИТЬ'}
                            color="green"
                            textColor="white"
                            size="lr"
                            onClick={(e) => {
                                e.preventDefault();
                                handleSubmit(formTypes)}}
                        />
                    </Box>
                    {formTypes === "registration" &&
                        <div className="account-container">
                            <p className="text-account">Уже есть аккаунт?
                                <a onClick={() => handleButtonClick('authorization')} className="auth-text">ВОЙТИ</a>
                            </p>
                        </div>
                    }
                    {
                        formTypes === "authorization" &&
                        <div className="account-container">
                            <a onClick={() => handleButtonClick('recovery')} className="text-account">
                                Забыли пароль?
                            </a>
                        </div>
                    }
                </StyledModal>
            </StyleModalDialog>
        );
    }
;

