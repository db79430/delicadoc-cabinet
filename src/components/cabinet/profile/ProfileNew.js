import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField } from '@mui/material';
import {setUserInfo, setUserToken} from "../../../redux/action/action";
import {MenuCabinetButtonDown} from "../buttons-checks-play/MenuCabinetButtonDown";
import {styled} from "@mui/system";
import "./Profile.css"
import "./ProfileMedia.css"

export const ProfileNew = ({ token, user_data }) => {


    const renderFormFields = () => {
        return (
            <>
                <FormRow>
                    <FormGroup>
                        <StyledFormLabel>Имя</StyledFormLabel>
                        <StyledTextField
                            placeholder="Введите имя"
                            name="first_name"
                            value={user_data.first_name || ''}
                        />
                    </FormGroup>
                    <FormGroup>
                        <StyledFormLabel>Фамилия</StyledFormLabel>
                        <StyledTextField
                            placeholder="Введите фамилию"
                            name="family_name"
                            value={user_data.family_name || ''}
                        />
                    </FormGroup>
                    <FormGroup>
                        <StyledFormLabel>Телефон</StyledFormLabel>
                        <StyledTextField
                            placeholder="+7 (___)___-___-__-__"
                            name="phone"
                            value={user_data.phone || ''}
                        />
                    </FormGroup>
                </FormRow>
                    <FormRow>
                        <FormGroup>
                            <StyledFormLabel>E-mail</StyledFormLabel>
                            <StyledTextField
                                placeholder="Введите e-mail"
                                name="email"
                                value={user_data.email || ''}
                            />
                        </FormGroup>
                        <FormGroup>
                            <StyledFormLabel>Карта</StyledFormLabel>
                            <StyledTextField
                                placeholder="Введите карту"
                                name="cart"
                                value={user_data.cart || ''}
                            />
                        </FormGroup>
                        <UpdateData>
                            <a>Изменить данные</a>
                        </UpdateData>
                    </FormRow>
            </>
        );
    };

    return (
        <ProfileContainer>
            <ProfileTitle>
                <StyledTitle className="profile-date-title">Данные профиля</StyledTitle>
                <Points>
                    <p>Начисленные баллы</p>
                    <NumberPoints>{user_data.count_points}</NumberPoints>
                </Points>
            </ProfileTitle>
            <FormContainer>
                {renderFormFields()}
            </FormContainer>
            <MenuCabinetButtonDown />
        </ProfileContainer>
    );
};

const ProfileContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const ProfileTitle = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    textAlign: 'center',
    marginBottom: '20px',
    '@media (max-width: 430px)': {
        flexDirection: 'column',
        alignItems: 'center',
        '& > div': {
            margin: '10px 0',
            width: '90%',
            justifyContent: 'center',
        },
    },
});

const StyledTitle = styled(Typography)({
    fontFamily: '"Flame Regular", sans-serif',
    fontSize: '42px',
    marginLeft: '24px',
    '@media (max-width: 430px)': {
        marginLeft: '0',
        },
});

const Points = styled(Box)({
    position: 'relative',
    marginRight: '1%',
    width: '249px',
    height: '125px',
    borderRadius: '0 20px 20px 20px',
    boxShadow: '0 13px 41px 13px rgba(59, 26, 3, 0.1)',
    background: 'linear-gradient(135deg, #FFA500, #FF4500)',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '20px',
    '& p': {
        marginTop: '20px',
    }
});

const NumberPoints = styled(Typography)({
    fontSize: '42px',
    fontFamily: '"Flame Regular", sans-serif',
    textAlign: 'center',
});

const FormContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const FormGroup = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px 0',
});

const FormRow = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    '& > div': {
        flex: 1,
        margin: '0 10px',
    },
    '@media (max-width: 430px)': {
        flexDirection: 'column',
        alignItems: 'center',
        '& > div': {
            margin: '10px 0',
            width: '90%',
            justifyContent: 'center',
        },
    },
});

const StyledFormLabel = styled(Typography)({
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'left',
    color: 'rgb(255, 117, 5)',
    fontSize: '16px',
    margin: '5px 0',
    fontFamily: '"Flame Regular", sans-serif',
});

const StyledTextField = styled(TextField)({
    boxSizing: 'border-box',
    borderRadius: '20px',
    width: '420px',
    margin: '10px 0',
    backgroundColor: '#FFF7EB',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgb(255, 117, 5)',
            borderRadius: '20px',
        },
        '&:hover fieldset': {
            borderColor: 'rgb(255, 117, 5)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgb(255, 117, 5)',
            height: '70px',
        },
    },
    '& .MuiInputBase-input': {
        color: '#341700',
        fontFamily: '"Flame Regular", sans-serif',
        paddingLeft: '16px',
        height: '90px'
    },
});

const UpdateData = styled(Box)({
    position: 'relative',
    fontSize: '20px',
    marginTop: '50px',
    '& a': {
        color: 'rgb(255, 255, 255);',
        cursor: 'pointer',
        marginTop: '50px',
        '@media (max-width: 430px)': {
            flexDirection: 'column',
            alignItems: 'center',
            '& > div': {
                margin: '10px 0',
                width: '90%',
                justifyContent: 'center',
            },
        },
    }
});
