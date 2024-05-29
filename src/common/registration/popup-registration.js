import React, {useEffect, useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import "./popup-registration.css"
import {IoCloseOutline} from "react-icons/io5";
import CustomButton from "../button/Button";
import {useDispatch} from "react-redux";
import axios from "axios";
import {setRegistrationUser} from "../../redux/action/action";
import {getInfoPromoUsers, registrationUser} from "../../redux/function/function-service";
import {Auth} from "../auth/auth";
// import {getInfoPromoUsers, registrationUser} from "../../redux/function/function-service";

export const RegistrationPopup = ({ open, onClose }) => {
    const [openAuthPopup, setOpenAuthPopup] = useState(false)
    const [formData, setFormData] = useState({
        first_name: '',
        family_name: '',
        email: '',
        phone: '',
    });

    const dispatch = useDispatch();

    const handleAuthClose = () => {
        setOpenAuthPopup(false);
    };

    const handleAuthOpen = () => {
        setOpenAuthPopup(true);
    };
    const onFirstNameChange = (event) => {
        // validateUsername(event.target.value);
        setFormData({
            ...formData,
            first_name: event.target.value
        })
    };

    const onFamilyNameChange = (event) => {
        setFormData({
            ...formData,
            family_name: event.target.value
        })
    }

    const onEmailChange = (event) => {
        setFormData({
            ...formData,
            email: event.target.value
        })
    }

    const onPhoneChange = (event) => {
        setFormData({
            ...formData,
            phone: event.target.value
        })
    }

    const handleRegistration = () => {
        dispatch(registrationUser(formData));
    }


    return (
                <Modal className="modal-container" show={open} onHide={onClose} centered>
                    <Modal.Header>
                        <Modal.Title className="modal-title">Регистрация</Modal.Title>
                        <div>
                            <IoCloseOutline size={24} onClick={onClose} className="close-button" />
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="form-container">
                            <Form.Group className="form-group">
                                <Form.Label className="form-label-custom">Имя</Form.Label>
                                <Form.Control
                                    className="form-control"
                                    size="lg"
                                    type="text"
                                    placeholder="Введите имя"
                                    value={formData.first_name}
                                    onChange={onFirstNameChange}
                                />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label className="form-label-custom">Фамилия</Form.Label>
                                <Form.Control
                                    className="form-control"
                                    size="lg"
                                    type="text"
                                    placeholder="Введите фамилию"
                                    value={formData.family_name}
                                    onChange={onFamilyNameChange}

                                />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label className="form-label-custom">Телефон</Form.Label>
                                <Form.Control
                                    className="form-control"
                                    size="lg"
                                    type="text"
                                    placeholder="+7 (___)___-___-__-__"
                                    value={formData.phone}
                                    onChange={onPhoneChange}
                                />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label className="form-label-custom">E-mail</Form.Label>
                                <Form.Control
                                    className="form-control"
                                    size="lg"
                                    type="text"
                                    placeholder="Введите e-mail"
                                    value={formData.email}
                                    onChange={onEmailChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Согласие на обработку персональных данных"
                                    className="form-check-orange"
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="custom-button-form">
                            <div className="button-form">
                                <CustomButton text={"РЕГИСТРАЦИЯ"}
                                              color="green"
                                              textColor="white"
                                              size="lr"
                                              onClick={handleRegistration}
                                />
                            </div>
                            <div>
                                <p className="text-account">Уже есть аккаунт?
                                    <a className="auth-text" onClick={handleAuthOpen}>ВОЙТИ</a>
                                </p>
                            </div>
                        </div>
                    </Modal.Footer>
                    <Auth open={openAuthPopup} onClose={handleAuthClose}/>
                </Modal>
    );
};

