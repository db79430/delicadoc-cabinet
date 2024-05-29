import React, {useState} from "react";
import {AppBar, IconButton, Toolbar, styled} from "@mui/material";
import {FiMenu} from "react-icons/fi";
import {NavigationBurgerMenu} from "./burger-menu/NavigationBurgerMenu";
import logo from './img/logo-vk.svg';
import delicados from './img/Delicados.svg';
import {Nav} from "react-bootstrap";
import CustomButton from "../../common/button/Button";
import {useNavigate} from "react-router-dom";
import "./NavigationMenu.css"
import "./NavigationMenuMedia.css"
import {RxExit} from "react-icons/rx";

const StyledNav = styled('nav')({
    '& ul': {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        '& li': {
            marginRight: '10px',
            '& a': {
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '22px',
                marginLeft: 'calc(16px + 1vmin)'
            },
        },
    },
    '@media (max-width: 430px)': {
        display: 'none'
    }

});

const StyledAppBar = styled(AppBar)({
    backgroundColor: "transparent",
    boxShadow: "none",

});

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: "100%",
    padding: 0,
    marginRight: 'calc(40px + 1vmin)',
    '@media (max-width: 430px)': {
        display: 'flex',
        justifyContent: 'space-between',
    }


})

const NavigationMenuNew = ({token, user_data}) => {
    const navigate = useNavigate();
    const [showMenuPopup, setShowMenuPopup] = useState(false);

    const handleMenuClick = () => {
        setShowMenuPopup(true);
    };

    const handleMenuClose = () => {
        setShowMenuPopup(false);
    };

    const handleExitClick = () => {
        navigate('/delicadoc-frontend')
    };

    return (
        <>
            <StyledAppBar position="relative">
                <StyledToolbar className="tooldbar-media">
                    <div className="logo-images">
                        <img className="logo-delicados" src={delicados} alt="Delicados Logo"/>
                        <img className="logo-burger" src={logo} alt="Burger King Logo"/>
                    </div>
                    <div className="burger-menu-container">
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuClick}
                        >
                            <FiMenu size={50}/>
                        </IconButton>
                    </div>
                    <StyledNav className="menu-container">
                        <ul>
                            <li>
                                <a href="#prizes">Призы</a>
                            </li>
                            <li>
                                <a href="#winners">Победители</a>
                            </li>
                            <li>
                                <a href="#buy">Где купить</a>
                            </li>
                            <li>
                                <a href="#question">Вопрос-ответ</a>
                            </li>
                            <li>
                                <a href="#contact">Обратная связь</a>
                            </li>
                        </ul>
                    </StyledNav>
                    {showMenuPopup && <NavigationBurgerMenu open={showMenuPopup} onClose={handleMenuClose}/>}
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                        <div className="button-container-cabinet">
                            <Nav.Item className="button-word">
                                <CustomButton textColor="white" size="ls" color="green" text={user_data.first_name}/>
                            </Nav.Item>
                            <Nav.Item className="button-word">
                                <CustomButton textColor="white"
                                              size="ms" color="green"
                                              text={"Выйти"}
                                              onClick={handleExitClick}
                                              icon={<RxExit size={20}/>}
                                />
                            </Nav.Item>
                        </div>
                    </div>
                    {/*<div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>*/}
                    {/*    <Nav className="burger-menu-container">*/}
                    {/*        <FiMenu onClick={handleMenuClick} className="icon-burger-menu" size={50}/>*/}
                    {/*    </Nav>*/}
                    {/*</div>*/}
                </StyledToolbar>
            </StyledAppBar>
        </>
    );
};

export default NavigationMenuNew;
