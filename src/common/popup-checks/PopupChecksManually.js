import React, {useEffect, useState} from "react";
import {Box} from "@mui/material";
import {
    StyledBox,
    StyledContainer,
    StyledTypography,
    StyledTextField,
    StyledFormLabel,
    FormGroup
} from "./StyledPopupChecks";
import CustomButton from "../button/Button";
import {uploadCheckFields, uploadCheckFoto} from "../../redux/function/function-service";
import {useDispatch} from "react-redux";
import "./CustomPopupChecks.css"
import {CustomPopupSubmitted} from "./CustomPopupSubmitted";

export const PopupChecksManually = ({ token, promo}) => {
    const dispatch = useDispatch();
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [checkStatus, setCheckStatus] = useState(null);
    const [formType, setFormType] = useState({
        s: '',
        fn: '',
        fd: '',
        fp: ''
    });

    const [errors, setErrors] = useState({
        s: '',
        fn: '',
        fd: '',
        fp: ''
    });

    const validateInput = (name, value) => {
        let error = '';
        if (!/^\d*$/.test(value)) {
            error = 'Можно вводить только цифры';
        } else if (name === 'fd' && value.length > 5) {
            error = 'Ошибка! Количиство цифр - не более 5';
        }
        return error;
    };

    const isFormValid = () => {
        return Object.values(errors).every(error => error === '') &&
            Object.values(formType).every(field => field !== '');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const error = validateInput(name, value);

        setFormType({
            ...formType,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: error,
        });
    };

    useEffect(() => {
        setIsButtonDisabled(!isFormValid());
    }, [errors, formType]);

    const handleSubmit = () => {
        if (isFormValid()) {
            dispatch(uploadCheckFields(promo, token, formType)) .then(response => {
                if (response.status === 200) {
                    setCheckStatus('submitted');
                } else if (response.status === 412) {
                    setCheckStatus('invalid');
                }
            })
                .catch(error => {
                    setCheckStatus('invalid');
                });
        } else {
            alert('Пожалуйста, исправьте ошибки в форме');
        }
    };

    if (checkStatus === 'submitted') {
        return <CustomPopupSubmitted />;
    }

    return (
        <StyledContainer>
            <Box>
                <StyledTypography>Правила загрузки чеков</StyledTypography>
                <ul className="text-rules-loading-checks">
                    <ul className="ul-text">
                        1. К участию в акции принимаются чеки, покупки по которым были осуществлены в период с
                        15.05.2024 по 15.07.2024, 23:59 по МСК
                    </ul>
                    <ul className="ul-text">
                        2. На чеке обязательно должны присутствовать: номер чека, дата и время покупки, итоговая сумма,
                        ФН, ФД. ФПД, QR-код.
                    </ul>
                    <ul className="ul-text">
                        3. В чеке обязательно должен присутствовать продукт Delicados Nachos, участвующий в акции.
                    </ul>
                    <ul className="ul-text">
                        4. В одну заявку можно ввести только 1 чек.
                    </ul>
                </ul>
                <FormGroup>
                    <StyledFormLabel>Сумма покупки</StyledFormLabel>
                    <StyledTextField
                        placeholder="000,00"
                        name="s"
                        value={formType.s}
                        onChange={handleChange}
                        title="Сумма покупки"
                    />
                </FormGroup>
                {errors.s && <div className="error">{errors.s}</div>}
                <FormGroup>
                    <StyledFormLabel>ФН чека</StyledFormLabel>
                    <StyledTextField
                        placeholder="Введите ФН чека"
                        name="fn"
                        value={formType.fn}
                        onChange={handleChange}
                    />
                    {errors.fn && <div className="error">{errors.fn}</div>}
                </FormGroup>
                <FormGroup>
                    <StyledFormLabel>ФД чека</StyledFormLabel>
                    <StyledTextField
                        placeholder="Введите ФД чека"
                        name="fd"
                        value={formType.fd}
                        onChange={handleChange}
                    />
                    {errors.fd && <div className="error">{errors.fd}</div>}
                </FormGroup>
                <FormGroup>
                    <StyledFormLabel>ФП чека</StyledFormLabel>
                    <StyledTextField
                        placeholder="Введите ФП чека"
                        name="fp"
                        value={formType.fp}
                        onChange={handleChange}
                    />
                    {errors.fp && <div className="error">{errors.fp}</div>}
                </FormGroup>
                <StyledBox>
                    <CustomButton textColor="white"
                                  color={isButtonDisabled ? 'grey' : 'green'}
                                  text="Отправить" size="lw"
                                  onClick={handleSubmit}
                                  disabled={isButtonDisabled}
                    />
                </StyledBox>

            </Box>
        </StyledContainer>
    )
}