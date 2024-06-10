// import {Col, Form, Row, Container} from "react-bootstrap";
// import React, {useEffect} from "react";
// import "./Profile.css"
// import {MenuCabinetButtonDown} from "../buttons-checks-play-info-main/MenuCabinetButtonDown";
// import "./ProfileMedia.css"
// import {setUserInfo, setUserToken} from "../../../redux/action/action";
// import {useDispatch, useSelector} from "react-redux";
//
// export const Profile = ({token}) => {
//
//
//
//     return (
//         <div className="profile-container">
//             <div className="profile-title">
//                 <p className="profile-date-title">Данные профиля</p>
//                 <div className="points">
//                     <p>Начисленные баллы</p>
//                     <p className="number-points">{user_data.count_points}</p>
//                 </div>
//             </div>
//             <div className="form-cabinet">
//                 <div>
//                     <Form>
//                         <Form.Group className="form-group-cabinet">
//                             <Form.Control
//                                 className="form-control-cabinet"
//                                 size="lg"
//                                 type="text"
//                                 value={user_data.first_name}
//                             />
//                         </Form.Group>
//                     </Form>
//                 </div>
//                 <div>
//                     <Form>
//                         <Form.Group className="form-group-cabinet">
//                             <Form.Control
//                                 className="form-control-cabinet"
//                                 size="lg"
//                                 type="text"
//                                 value={user_data.family_name}
//                             />
//                         </Form.Group>
//                     </Form>
//                 </div>
//                 <div>
//                     <Form>
//                         <Form.Group className="form-group-cabinet">
//                             <Form.Control
//                                 className="form-control-cabinet"
//                                 size="lg"
//                                 type="text"
//                                 value={user_data.phone}
//                             />
//                         </Form.Group>
//                     </Form>
//                 </div>
//             </div>
//             <div className="form-cabinet-two">
//                 <div>
//                     <Form>
//                         <Form.Group className="form-group-cabinet">
//                             <Form.Control
//                                 className="form-control-cabinet"
//                                 size="lg"
//                                 type="text"
//                                 value={user_data.email}
//                             />
//                         </Form.Group>
//                     </Form>
//                 </div>
//                 <div>
//                     <Form>
//                         <Form.Group className="form-group-cabinet">
//                             <Form.Control
//                                 className="form-control-cabinet"
//                                 size="lg"
//                                 type="text"
//                                 value={user_data.cart || ''}
//                             />
//                         </Form.Group>
//                     </Form>
//                 </div>
//                 <div className="update-data">
//                     <a>Изменить данные</a>
//                 </div>
//             </div>
//             <div>
//                 <MenuCabinetButtonDown/>
//             </div>
//         </div>
//     );
// }