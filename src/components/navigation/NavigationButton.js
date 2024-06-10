// import {Modal, Nav} from "react-bootstrap";
// import CustomButton from "../../common/button/Button";
// import React, {useEffect, useState} from "react";
// import {IoCloseOutline} from "react-icons/io5";
// import {FiMenu} from "react-icons/fi";
// import './NavigationMenu.css'
//
// import {RegistrationPopup} from "../../common/registration/popup-registration";
// import NestedModal from "../../common/button/Example";
// import {CustomPopupAuth} from "../../common/popup-auth/CustomPopupAuth";
// import {registrationUser, restorePassword, userAuthenticated, userInfo} from "../../redux/function/function-service";
// import {useDispatch} from "react-redux";
// import {useLocation, useNavigate} from "react-router-dom";
//
// export const NavigationButton = () => {
//         const [openPopupRegistration, setOpenPopupRegistration] = useState(false);
//         const [openPopupAuth, setOpenPopupAuth] = useState(false);
//         const [openPopupRecovery, setOpenPopupRecovery] = useState(false);
//         const [formData, setFormData] = useState({
//             first_name: '',
//             family_name: '',
//             email: '',
//             email_phone: '',
//             phone: '',
//             password: '',
//             token: '',
//             formType: ''
//         });
//
//
//         useEffect(() => {
//             setOpenPopupRegistration(true)
//         }, [])
//
//         const handleOpenPopupAuth = () => {
//             setOpenPopupAuth(true);
//             setOpenPopupRegistration(false)
//         }
//
//         const handleOpenPopupRecovery = () => {
//             setOpenPopupRecovery(true)
//             setOpenPopupAuth(false);
//
//         }
//
//     const handleButtonOpenClick = (formType) => {
//         switch (formType) {
//             case 'registration':
//                 setOpenPopupAuth(false);
//                 setOpenPopupRegistration(true);
//                 break;
//             case 'authorization':
//                 setOpenPopupAuth(true);
//                 setOpenPopupRegistration(false);
//                 break;
//             case 'recovery':
//                 setOpenPopupRegistration(false);
//                 setOpenPopupRecovery(true);
//                 setOpenPopupAuth(false);
//                 break;
//             default:
//                 console.error('Unknown form type');
//         }
//     };
//
//
//
//
//     return (
//             <>
//                 <div className="button-container">
//                     <Nav.Item className="button-word">
//                         <CustomButton textColor="green" size="sm" color="primary" text={"Играть"}/>
//                     </Nav.Item>
//                     <Nav.Item className="button-word">
//                         {/*<CustomButton*/}
//                         {/*    textColor="white"*/}
//                         {/*    size="sm"*/}
//                         {/*    color="green"*/}
//                         {/*    text={"Войти"}*/}
//                         {/*    onClick={() => handleButtonClick('registration')}*/}
//                         {/*/>*/}
//                             <CustomPopupAuth
//                                 formData={formData}
//                                 open={openPopupRegistration}
//                                 onClose={() => handleClose("registration")}
//                                 setFormData={setFormData}
//                                 handleButtonOpenClick={handleButtonOpenClick}
//                             />
//                         {openPopupAuth && (
//                             <CustomPopupAuth
//                                 open={openPopupAuth}
//                                 onClose={() => handleClose("authorization")}
//                                 setFormData={setFormData}
//                                 formData={formData}
//                                 handleButtonOpenClick={handleButtonOpenClick}
//                             />
//                         )}
//                         {openPopupRecovery && (
//                             <CustomPopupAuth
//                                 open={openPopupRecovery}
//                                 onClose={() => handleClose("recovery")}
//                                 setFormData={setFormData}
//                                 formData={formData}
//                                 handleButtonOpenClick={handleButtonOpenClick}
//                             />
//                         )}
//                     </Nav.Item>
//                 </div>
//             </>
//         );
//     }
// ;