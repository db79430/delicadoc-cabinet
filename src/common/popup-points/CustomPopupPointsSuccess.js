import {Box} from "@mui/material";
import {CloseButton, StyledTitle, StyledTypography} from "../popup-checks/StyledPopupChecks";
import {StyledModal, StyleModalDialog} from "./StyledPopupPoints";
import CustomButton from "../button/Button";
import React from "react";
import "./StyledPopupPoints"

export const CustomPopupPointsSuccess = ({open, token, onClose}) => {
    return (
        <StyleModalDialog open={open} onClose={onClose}>
            <Box>
                <StyledTitle>Обменять баллы</StyledTitle>
                <CloseButton onClick={onClose}/>
            </Box>
            <StyledModal>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <StyledTypography>Вы успешно обменяли баллы</StyledTypography>
                    <p>Ваш купон появится в личном кабинете</p>
                    <CustomButton
                        textColor="white"
                        color="green"
                        text="ПЕРЕЙТИ В ЛИЧНЫЙ КАБИНЕТ"
                        size="ld"
                    />
                </Box>
            </StyledModal>
        </StyleModalDialog>
    )
}