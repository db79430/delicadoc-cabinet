import "./StyledPopupPoints"
import {CouponContainer, StyledModal, StyleModalDialog, Circle, StyledBox} from "./StyledPopupPoints";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {setUserToken} from "../../redux/action/action";
import {getWeekInfoPromo, uploadCheckFoto, userInfo, userSelectPoints} from "../../redux/function/function-service";
import {CloseButton, StyledTitle, StyledTypography, StyledTypographyInvalid} from "../popup-checks/StyledPopupChecks";
import {Box} from "@mui/material";
import CustomButton from "../button/Button";
import "./CustomPopupPoints.css"
import {CustomPopupPointsSuccess} from "./CustomPopupPointsSuccess";
import {CustomPopupPointsError} from "./CustomPopupPointsError";
import {selectPoints, selectPromo, selectUserData} from "../../selector";

export const CustomPopupPoints = ({open, token, onClose}) => {
    const points = useSelector(selectPoints);
    const promo = useSelector(selectPromo);
    const user_data = useSelector(selectUserData);
    const dispatch = useDispatch();
    const [pointsOpenError, setPointsOpenError] = useState(false)
    const [pointsSuccess, setPointsSuccess] = useState(false)
    const [selectedCoupon, setSelectedCoupon] = useState({
        id_coupon: '',
        price: ''
    });

    console.log('promo', promo)


    console.log('user_data', user_data)
    console.log('selectedCoupon', selectedCoupon)

    useEffect(() => {
        if (token) {
            dispatch(setUserToken(token));
            dispatch(getWeekInfoPromo());
            dispatch(userInfo(token));
        }
    }, [dispatch, token]);

    const handleCouponExchange = async (coupon) => {
        try {
            console.log("Купон:", coupon);
            if (!coupon || !coupon.id) {
                throw new Error("Неверный объект купона");
            }
            const response = await dispatch(userSelectPoints(token, {
                id_coupon: coupon.id,
                price: coupon.price
            }));
            console.log("Ответ:", response);
            if (response) {
                setPointsSuccess(true);
            } else {
                setPointsOpenError(true);
            }
            return response;
        } catch (error) {
            console.error("Ошибка при отправке запроса:", error);
            setPointsOpenError(true);
        }
    };

    return (
        <>
            <StyleModalDialog open={open} onClose={onClose}>
                <StyledModal>
                    <Box>
                        <StyledTitle>Обменять баллы</StyledTitle>
                        <CloseButton onClick={onClose}/>
                    </Box>
                    <Box>
                        {promo.coupons.map(coupon => (
                            <CouponContainer key={coupon.id}>
                                <div className="points-position">
                                    <Circle><p className="points-title">{coupon.price} баллов</p></Circle>
                                </div>
                                <div className="image-background">
                                    <img className="image-points" src={coupon.general_attachment} alt={coupon.name}/>
                                </div>
                                <p className="points-title">{coupon.name}</p>
                                <StyledBox>
                                    <CustomButton
                                        textColor="white"
                                        color="green"
                                        text="Обменять"
                                        size="md"
                                        onClick={() => handleCouponExchange(coupon)}
                                    />
                                </StyledBox>
                            </CouponContainer>
                        ))}
                    </Box>
                </StyledModal>
            </StyleModalDialog>
            {pointsSuccess &&
                <CustomPopupPointsSuccess open={pointsSuccess} onClose={() => setPointsSuccess(false)}/>
            }
            {pointsOpenError &&
                <CustomPopupPointsError open={pointsOpenError} onClose={() => setPointsOpenError(false)}/>
            }
        </>
    );
};