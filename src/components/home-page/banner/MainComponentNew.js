import React from "react";
import { Container, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import chips from "../banner/img/chips.png";
import iconTg from "../banner/img/icons-tg.svg";
import vector from "../banner/img/vector-1.svg";
import logo5ka from "../banner/img/лого_5ка.svg";
import logoPerek from "../banner/img/лого_перекресток.svg";
import shadowWhite from "./img/white.svg";
import airplane from "../banner/img/airplane.svg";
import mexico from "../banner/img/Мексика.svg";
import "./MainComponent.css";
import "./MainComponentMedia.css";
import { WinPrizes } from "../winprizes/WinPrizes";
import CustomButton from "../../common/button/Button";

const MainContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
});

const ImageContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'left',
    width: '50%',
    position: 'relative',
});

const ImageVector = styled('img')({
    display: 'block',
    position: 'relative',
    width: '70%',
    left: '-10%',
    marginTop: '14%',
    zIndex: 0,
});

const ChipsMain = styled('img')({
    display: 'block',
    width: '60%',
    position: 'absolute',
    top: '15%',
    zIndex: 1,
});

const ShadowImage = styled('img')({
    display: 'block',
    position: 'absolute',
    zIndex: 2,
    width: '90%',
    left: '1%',
    top: '32%',
});

const TextUnder = styled(Box)({
    position: 'absolute',
    width: 265,
    height: 42,
    color: '#341700',
    fontSize: 20,
    left: '10%',
    top: 800,
    zIndex: 2,
});

const LogoContainer = styled(Box)({
    display: 'block',
    position: 'absolute',
    zIndex: 4,
    top: 800,
    left: '40%',
});

const Logo = styled('img')({
    width: 40,
    height: 40,
    padding: 10,
});

const AirplaneImage = styled('img')({
    display: 'block',
    position: 'relative',
    width: 300,
    zIndex: 5,
    left: '-16%',
});

const MexicoImage = styled('img')({
    display: 'block',
    position: 'relative',
    zIndex: 4,
    left: '-28%',
});

const BurgerContainer = styled(Box)({
    position: 'relative',
    marginTop: 12,
    width: '50%',
    left: '8%',
    top: '-50%',
    zIndex: 2,
});

const TitleBurger = styled('p')({
    fontFamily: 'Flame Bold, sans-serif',
    fontSize: 40,
    padding: 0,
});

const RegisterCheck = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    margin: 16,
    width: 426,
    height: 66,
    borderRadius: '0 15px 15px 15px',
    boxShadow: '-2px 4px 20px 0 rgba(255, 255, 255, 0.5), 0 4px 90px 0 rgb(254, 208, 1)',
    backgroundColor: 'rgb(109, 113, 46)',
});

const RegisterText = styled('p')({
    marginLeft: 16,
    fontSize: 18,
    textAlign: 'center',
});

const IconImage = styled(Box)({
    width: 48,
    marginLeft: 16,
    height: 46,
    boxSizing: 'border-box',
    border: '1px solid rgb(255, 255, 255)',
    borderRadius: '0px 15px 15px 15px',
    boxShadow: '0px 4px 14.7px 0px rgba(123, 70, 12, 0.4)',
    background: 'rgb(255, 255, 255)',
});

const PrizeRow = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
});

const PrizeText = styled(Box)({
    position: 'relative',
    width: 540,
    height: 160,
    color: '#66722D',
    fontSize: 20,
    padding: 2,
    zIndex: 7,
    fontFamily: 'Blue Curve, sans-serif',
    left: '-16%',
    marginTop: 160,
});

const PrizeItem = styled('a')({
    fontSize: 32,
    padding: 2,
});

const WinContainer = styled(Box)({
    marginTop: '30%',
});

export const MainComponentNew = () => {
    const redirectToSite = () => {
        window.location.href = "https://delicados-promo.ru";
    };

    return (
        <MainContainer>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <ImageContainer>
                        <ImageVector src={vector} alt="vector" />
                        <ChipsMain src={chips} alt="chips" />
                        <ShadowImage src={shadowWhite} alt="shadow" />
                        <TextUnder>
                            Лимитированный вкус только в «Пятёрочке» и «Перекрёстке»
                        </TextUnder>
                        <LogoContainer>
                            <Logo src={logo5ka} alt="logo5ka" />
                            <Logo src={logoPerek} alt="logoPerek" />
                        </LogoContainer>
                    </ImageContainer>
                    <AirplaneImage src={airplane} alt="airplane" />
                    <MexicoImage src={mexico} alt="mexico" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <BurgerContainer>
                        <Box>
                            <TitleBurger>Вперед</TitleBurger>
                            <TitleBurger>c Бургер Кинг</TitleBurger>
                            <TitleBurger>к приключениям!</TitleBurger>
                        </Box>
                        <RegisterCheck>
                            <RegisterText>РЕГИСТРИРУЙ ЧЕК</RegisterText>
                            <Box sx={{ marginLeft: 16 }}>
                                <CustomButton
                                    textColor="green"
                                    size="sm"
                                    color="primary"
                                    text="на сайте"
                                    onClick={redirectToSite}
                                />
                            </Box>
                            <IconImage>
                                <img
                                    className="tg"
                                    src={iconTg}
                                    width={40}
                                    height={40}
                                    alt="Telegram"
                                />
                            </IconImage>
                        </RegisterCheck>
                        <RegisterCheck>
                            <RegisterText>ИГРАЙТЕ И ВЫЙГРЫВАЙТЕ ВКУСНЫЕ ПРИЗЫ</RegisterText>
                        </RegisterCheck>
                        <PrizeRow>
                            <PrizeText>
                                Главный приз: путешествие в МЕКСИКУ на
                                <PrizeItem>500 000</PrizeItem> рублей
                            </PrizeText>
                            <AirplaneImage src={airplane} alt="airplane" />
                            <MexicoImage src={mexico} alt="mexico" />
                        </PrizeRow>
                    </BurgerContainer>
                </Grid>
            </Grid>
            <WinContainer>
                <WinPrizes />
            </WinContainer>
        </MainContainer>
    );
};
