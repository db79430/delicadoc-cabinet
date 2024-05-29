import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {restorePassword, userAuthenticated} from "../../redux/function/function-service";
import Modal from "react-bootstrap/Modal";
import {IoCloseOutline} from "react-icons/io5";
import {Form} from "react-bootstrap";
import CustomButton from "../button/Button";

export const RestorePasswordPopup = ({ open, onClose }) => {
    const dispatch = useDispatch();
    const [openRestorePopup, setOpenRestorePopup] = useState(false);
    const promoUsers = useSelector((state) => state.infoPromo.promoUsers || []);
    const [formData, setFormData] = useState({
        email: '',
    });

    const onEmailChange = (event) => {
        setFormData({
            ...formData,
            email: event.target.value
        })
    }

    console.log ('promoUsers', promoUsers)

    // const handleAuth = () => {
    //     dispatch(restorePassword(promoUsers.token));
    // }

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
                                    placeholder="Введите email"
                                    value={formData.email}
                                    onChange={onEmailChange}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="custom-button-form">
                            <div className="button-form">
                                <CustomButton text={"Отправить"}
                                              color="green"
                                              textColor="white"
                                              size="lr"
                                              // onClick={handleAuth}
                                />
                            </div>
                        </div>
                    </Modal.Footer>
                </Modal>
            </Modal.Dialog>
        </div>
    );
}