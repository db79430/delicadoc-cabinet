import {Box} from "@mui/material";
import CustomButton from "../button/Button";
import React from "react";
import {StyledContainer, StyledTypography} from "./StyledPopupChecks";

export const CustomPopupSubmitted = ({}) => {
    return (
                <Box display="flex" flexDirection="column" alignItems="center">
                    <StyledTypography>ВАШ ЧЕК ОТПРАВЛЕН!</StyledTypography>
                    <p>Статус чека можно отслеживать в личном кабинете</p>
                    <CustomButton textColor="white"
                                  color="green"
                                  text="ПЕРЕЙТИ В ЛИЧНЫЙ КАБИНЕТ" size="ld"/>
                </Box>
    )
}