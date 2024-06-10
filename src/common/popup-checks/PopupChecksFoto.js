import {Box, Button} from "@mui/material";
import CustomButton from "../button/Button";
import React, {useEffect, useState} from "react";
import {StyledContainer, StyledTypography, StyledTypographyInvalid} from "./StyledPopupChecks";
import {LuUpload} from "react-icons/lu";
import {uploadCheckFoto} from "../../redux/function/function-service";
import {useDispatch} from "react-redux";
import "./CustomPopupChecks.css"
import {CustomPopupSubmitted} from "./CustomPopupSubmitted";

export const PopupChecksFoto = ({promo, token}) => {

    const [uploadedFile, setUploadedFile] = useState(null);
    const [checkStatus, setCheckStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();


    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const validTypes = ['image/jpeg', 'image/png'];
        if (file && validTypes.includes(file.type)) {
            setUploadedFile(URL.createObjectURL(file));
            setCheckStatus(null);
            setErrorMessage('');
        } else {
            setUploadedFile(null);
            setErrorMessage('Пожалуйста, загрузите файл в формате JPEG или PNG.');
        }
    };

    const handleSubmit = () => {
        dispatch(uploadCheckFoto(promo, token))
            .then(response => {
                if (response.status === 200) {
                    setCheckStatus('submitted');
                } else if (response.status === 412) {
                    setCheckStatus('invalid');
                }
            })
            .catch(error => {
                setCheckStatus('invalid');
            });
    };
    return (
        <StyledContainer>
            {checkStatus === 'submitted' ? (
                <CustomPopupSubmitted/>
            ) : uploadedFile ? (
                <Box display="flex" flexDirection="column" alignItems="center">
                    {checkStatus === 'invalid' && (
                        <Box>
                            <StyledTypographyInvalid style={{color: '#FFC18E'}}>
                                Ваш чек не подходит. Пожалуйста, загрузите другое изображение.
                            </StyledTypographyInvalid>
                        </Box>
                    )}
                    <img src={uploadedFile} alt="Uploaded receipt"
                         style={{width: '219px', height: '222px', marginBottom: '16px'}}/>
                    <a className="other-check" onClick={() => setUploadedFile(null)}>Загрузить другой чек</a>
                    <Box display="flex" justifyContent="center" padding={2} flexDirection="column">
                        <CustomButton textColor="white"
                                      color={checkStatus === 'invalid' ? "grey" : "green"}
                                      text="Отправить" size="ld"
                                      onClick={handleSubmit}/>
                    </Box>
                </Box>
            ) : (
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box>
                        <StyledTypography>Правила загрузки чеков</StyledTypography>
                        <ul className="text-rules-loading-checks">
                            <ul>1. К участию в акции принимаются чеки, покупки по которым были осуществлены в период с
                                15.05.2024 по 15.07.2024, 23:59 по МСК
                            </ul>
                            <ul>2. На чеке обязательно должны присутствовать: номер чека, дата и время покупки, итоговая
                                сумма, ФН, ФД. ФПД, QR-код.
                            </ul>
                            <ul>3. В чеке обязательно должен присутствовать продукт Delicados Nachos, участвующий в
                                акции.
                            </ul>
                            <ul>4. В одну заявку можно загрузить только 1 чек. Нельзя загружать в форму несколько чеков
                                за раз.
                            </ul>
                            <ul>5. Файлы должны быть в формате JPEG или PNG.</ul>
                            <ul>6. Размер загружаемого файла не должен превышать 10 МБ.</ul>
                        </ul>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{
                            border: '1px dashed rgb(255, 117, 5)',
                            borderRadius: '30px',
                            width: '500px',
                            height: '264px',
                            marginBottom: '20px',
                            padding: '16px',
                            textAlign: 'center'
                        }}
                    >
                        <LuUpload style={{color: '#FF7505', fontSize: '24px', marginBottom: '8px'}}/>
                        <input
                            accept="image/*"
                            style={{display: 'none'}}
                            id="upload-receipt"
                            type="file"
                            onChange={handleFileUpload}
                        />
                        <label htmlFor="upload-receipt" style={{
                            cursor: 'pointer',
                            color: '#FF7505',
                            width: '335px',
                            fontFamily: '"Flame Regular", sans-serif'
                        }}>
                            Перетащите файл или выберите его на своем устройстве
                        </label>
                    </Box>
                    <CustomButton textColor="white" color="green" text="Загрузить" size="md"
                                  onClick={handleFileUpload}/>
                </Box>
            )}
        </StyledContainer>

    )
}