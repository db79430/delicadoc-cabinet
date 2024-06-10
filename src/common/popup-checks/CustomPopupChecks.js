import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Modal, Box, Typography, TextField, Button, Checkbox, FormControlLabel, Card, CardContent} from '@mui/material';
import CustomButton from '../button/Button';
import "./CustomPopupChecks.css"
import "./StyledPopupChecks"
import {
    StyledModal,
    StyledTitle,
    StyleModalDialog,
    CloseButton,
    StyleButtonUp,
    StyledTypography
} from "./StyledPopupChecks";
import {PopupChecksFoto} from "./PopupChecksFoto";
import {PopupChecksManually} from "./PopupChecksManually";


export const CustomPopupChecks = ({
                                      onClose,
                                      open,
                                      token
                                  }) => {
    const [agreementChecked, setAgreementChecked] = useState(true);
    const [currentPage, setCurrentPage] = useState('loading_foto');
    const promo = useSelector((state) => state.infoPromo.week_day || []);
    const dispatch = useDispatch();
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (
        <StyleModalDialog open={open} onClose={onClose}>
            <StyledModal>
                <Box>
                    <StyledTitle className="modal-title">Загрузить чек</StyledTitle>
                    <CloseButton onClick={onClose}/>
                </Box>
                <StyleButtonUp>
                    <div className="button-loading-check">
                        <CustomButton size="ld" color={currentPage === 'loading_foto' ? 'green' : 'border-check'}
                                      text="Загрузить фото"
                                      textColor={currentPage === 'loading_foto' ? 'white' : '#6D712E'}
                                      onClick={() => handlePageChange('loading_foto')}
                        />
                    </div>
                    <div className="button-loading-check">
                        <CustomButton text="Ввести в ручную" size="ld"
                                      color={currentPage === 'manually' ? 'green' : 'border-check'}
                                      textColor={currentPage === 'manually' ? 'white' : '#6D712E'}
                                      onClick={() => handlePageChange('manually')}
                        />
                    </div>
                </StyleButtonUp>
                {currentPage === 'loading_foto' && <PopupChecksFoto token={token} promo={promo.uuid}/>}
                {currentPage === 'manually' && <PopupChecksManually token={token} promo={promo.uuid}/>}
            </StyledModal>
        </StyleModalDialog>
    );
};

