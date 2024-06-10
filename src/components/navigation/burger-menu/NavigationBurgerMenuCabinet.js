
import CustomButton from "../../../common/button/Button";
import React from "react";
import {Drawer, IconButton, List, ListItem, ListItemText, Modal} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {RxExit} from "react-icons/rx";
import {useNavigate} from "react-router-dom";
import {IoMdPerson} from "react-icons/io";
import '../NavigationButtonMedia.css'
import {styled} from "@mui/system";

export const StyleListItem = styled(ListItem)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
});


const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: #FD6900;
    color: white;
    height: 611px;
    width: 300px;
    font-family: 'Blue Curve', sans-serif;
  }
`;

export const NavigationBurgerMenuCabinet = ({open, onClose, user_data}) => {
    const handleButtonClick = () => {
        onClose(false);
    };
    const navigate = useNavigate();

    const handleExitClick = () => {
        navigate('*')
    };

    return (
        <StyledDrawer
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
            <div className="modal-body-popup" style={{ padding: '16px'}}>
                <div className="popup-container">
                    <List className="popup-nav-word">
                        <StyleListItem className="button-word-popup">
                            <CustomButton icon={ <IoMdPerson size={20}/>}
                                          textColor="white"
                                          size="sm" color="green"
                                          text={user_data.first_name}
                            />
                        </StyleListItem>
                        <StyleListItem component="a" href="#prizes" className="menu-word-popup">
                            <ListItemText primary="Призы" />
                        </StyleListItem>
                        <StyleListItem component="a" href="#winners" className="menu-word-popup">
                            <ListItemText primary="Победители" />
                        </StyleListItem>
                        <StyleListItem component="a" href="#buy" className="menu-word-popup">
                            <ListItemText primary="Где купить" />
                        </StyleListItem>
                        <StyleListItem omponent="a" href="#question" className="menu-word-popup">
                            <ListItemText primary="Вопрос-ответ" />
                        </StyleListItem>
                        <StyleListItem component="a" href="#contact" className="menu-word-popup">
                            <ListItemText primary="Обратная связь" />
                        </StyleListItem>
                        <div className="button-container-popup">
                            <ListItem className="button-word-popup">
                                <CustomButton
                                    textColor="green"
                                    size="sm"
                                    color="primary"
                                    text="Играть"
                                    // onClick={handleExitClick}
                                />
                            </ListItem>
                            <ListItem className="button-word-popup">
                                <CustomButton
                                    textColor="white"
                                    size="sm"
                                    color="green"
                                    text="Выход"
                                    onClick={handleExitClick}
                                    icon={<RxExit size={20}/>}
                                    />
                            </ListItem>
                        </div>
                    </List>
                </div>
            </div>
        </StyledDrawer>
    )
}