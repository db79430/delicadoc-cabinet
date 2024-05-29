import Modal from 'react-bootstrap/Modal';


import React, {useState} from 'react';
import {IoCloseOutline} from "react-icons/io5";
import {Form} from "react-bootstrap";
import CustomButton from "../button/Button";
import {useDispatch} from "react-redux";
import {userAuthenticated} from "../../redux/function/function-service";
import "./auth.css"
import {RestorePasswordPopup} from "../restore-password/RestorePasswordPopup";
import {useNavigate} from "react-router-dom";


export const Auth = ({ open, onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [openRestorePopup, setOpenRestorePopup] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        token: ""
    });


    const onEmailChange = (event) => {
        setFormData({
            ...formData,
            email: event.target.value
        })
    }

    const handleRestoreClose = () => {
        setOpenRestorePopup(false);
    };

    const handleRestoreOpen = () => {
        setOpenRestorePopup(true);
    };


    const onPasswordChange = (event) => {
        setFormData({
            ...formData,
            password: event.target.value
        })
    }

    const handleAuth = () => {
        dispatch(userAuthenticated(formData)).then(
            response => {
                if (response.status === 200) {

                }
            }
        )
    }
    return (
        <div>
            <Modal.Dialog>
                <Modal className="modal-container" show={open} onHide={onClose}>
                    <Modal.Header>
                        <Modal.Title className="modal-title">Авторизация</Modal.Title>
                        <div>
                            <IoCloseOutline size={24} onClick={onClose} className="close-button" />
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="form-container">
                            <Form.Group className="form-group">
                                <Form.Label className="form-label-custom">Логин</Form.Label>
                                <Form.Control
                                    className="form-control"
                                    size="lg"
                                    type="text"
                                    placeholder="Введите логин"
                                    value={formData.email}
                                    onChange={onEmailChange}
                                />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label className="form-label-custom">Пароль</Form.Label>
                                <Form.Control
                                    className="form-control"
                                    size="lg"
                                    type="text"
                                    placeholder="Введите пароль"
                                    value={formData.password}
                                    onChange={onPasswordChange}

                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="custom-button-form">
                            <div className="button-form">
                                <CustomButton text={"Войти"}
                                              color="green"
                                              textColor="white"
                                              size="lr"
                                              onClick={handleAuth}
                                />
                            </div>
                            <div>
                                <p className="text-account">
                                    <a className="auth-text" onClick={handleRestoreOpen}>Забыли пароль ?</a>
                                </p>
                            </div>
                        </div>
                    </Modal.Footer>
                </Modal>
            </Modal.Dialog>
            <div>
                <RestorePasswordPopup open={openRestorePopup} onClose={handleRestoreClose}/>
            </div>
        </div>
    );
}