import React, {useEffect, useState} from "react";
import {Nav, Navbar, Modal} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import logo from './img/logo-vk.svg'
import delicados from './img/Delicados.svg'
import './NavigationMenu.css'
import './NavigationMenuMedia.css'
import {FiMenu} from "react-icons/fi";
import {NavigationBurgerMenu} from "./burger-menu/NavigationBurgerMenu";


export const NavigationMenu = () => {
    const [showMenuPopup, setShowMenuPopup] = useState(false);
    const handleMenuClick = () => {
        setShowMenuPopup(true);
    };

    const handleMenuClose = () => {
        setShowMenuPopup(false);
    };


    return (
        <div>
            <Navbar>
                <div className="nav-container">
                    <Navbar.Brand href="#home" className="img-navbar">
                        <div>
                            <img
                                src={delicados}
                                width="128"
                                height="54"
                                className="logo-delicados"
                            />
                            <img
                                src={logo}
                                width="54"
                                height="54"
                                className="logo-burgerking"
                            />
                        </div>
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <div className="menu-nav">
                            <Nav.Item className="menu-word" href="#prizes">Призы</Nav.Item>
                            <Nav.Item className="menu-word" href="#winners">Победители</Nav.Item>
                            <Nav.Item className="menu-word" href="#buy">Где купить</Nav.Item>
                            <Nav.Item className="menu-word" href="#question">Вопрос-ответ</Nav.Item>
                            <Nav.Item className="menu-word" href="#contact">Обратная связь</Nav.Item>
                        </div>
                    </Nav>
                    <Nav className="burger-menu-container">
                        <FiMenu onClick={handleMenuClick}
                                className="icon-burger-menu"
                                size={50}
                        />
                        {
                            showMenuPopup && <NavigationBurgerMenu open={showMenuPopup} onClose={handleMenuClose}/>
                        }
                    </Nav>
                </div>
        </Navbar>
</div>

)

}