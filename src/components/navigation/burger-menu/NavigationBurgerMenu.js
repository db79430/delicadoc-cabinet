
import CustomButton from "../../../common/button/Button";
import React from "react";
import {Drawer, IconButton, List, ListItem, ListItemText} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export const NavigationBurgerMenu = ({open, onClose}) => {
    const handleButtonClick = () => {
        onClose(false);
    };


    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    backgroundColor: "#FD6900",
                    color: 'white',
                    height: '611px',
                    width: '300px', // Adjust width as needed
                },
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
                <IconButton onClick={onClose} style={{ color: 'white' }}>
                    <CloseIcon fontSize="large" />
                </IconButton>
            </div>
            <div className="modal-body-popup" style={{ padding: '16px' }}>
                <div className="popup-container">
                    <List className="popup-nav-word">
                        <ListItem button component="a" href="#prizes" className="menu-word-popup">
                            <ListItemText primary="Призы" />
                        </ListItem>
                        <ListItem button component="a" href="#winners" className="menu-word-popup">
                            <ListItemText primary="Победители" />
                        </ListItem>
                        <ListItem button component="a" href="#buy" className="menu-word-popup">
                            <ListItemText primary="Где купить" />
                        </ListItem>
                        <ListItem button component="a" href="#question" className="menu-word-popup">
                            <ListItemText primary="Вопрос-ответ" />
                        </ListItem>
                        <ListItem button component="a" href="#contact" className="menu-word-popup">
                            <ListItemText primary="Обратная связь" />
                        </ListItem>
                        <div className="button-container-popup" style={{ marginTop: '16px' }}>
                            <ListItem className="button-word-popup">
                                <CustomButton
                                    textColor="green"
                                    size="small"
                                    color="primary"
                                    text="Играть"
                                    // onClick={handleClose}
                                />
                            </ListItem>
                            <ListItem className="button-word-popup">
                                <CustomButton
                                    textColor="white"
                                    size="small"
                                    color="green"
                                    text="Войти"
                                    onClick={handleButtonClick}
                                />
                            </ListItem>
                        </div>
                    </List>
                </div>
            </div>
        </Drawer>
    )
}