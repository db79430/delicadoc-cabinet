import {Container} from "react-bootstrap";
import React, {useEffect} from "react";
import group4583 from "./img/Group 4583.svg"
import group45832 from "./img/Group 4583 (2).svg"
import group45833 from "./img/Group 4583 (3).svg"
import group4586 from "./img/Group 4586.svg"
import group45861 from "./img/Group 4586 (1).svg"
import group45862 from "./img/Group 4586 (2).svg"
import group45863 from "./img/Group 4586 (3).svg"
import group45864 from "./img/Group 4586 (4).svg"
import group45865 from "./img/Group 4586 (5).svg"
import group45866 from "./img/Group 4586 (6).svg"
import group45867 from "./img/Group 4586 (7).svg"
import "./Prizes.css"
import {getWeekInfoPromo, userGift} from "../../../redux/function/function-service";
import {useDispatch, useSelector} from "react-redux";

export const Prizes = ({ token }) => {
    const dispatch = useDispatch();
    const prizes = useSelector(state => state.infoPromo.prizesUser);

    useEffect(() => {
        if (!prizes.length) {
            dispatch(userGift(token));
        }
    }, [dispatch, prizes.length, token]);

    console.log('prizes', prizes);

    return (
        <div className="prizes-container">
            <div className="image-grid">
                {prizes.map((image, index) => (
                    <div key={index}>
                        <div className="image-wrapper">
                            <img src={image.shop_img} className="shop-img" />
                            <img className="img-prizes" src={image.img_gift} />
                        </div>
                        <div>
                            <div className="caption">{image.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};