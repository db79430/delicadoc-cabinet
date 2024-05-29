import React from "react";
import PropTypes from "prop-types";
import './Button.css'
import './ButtonMedia.css'
import Button from "react-bootstrap/Button";
import { IconContext } from 'react-icons';

const CustomButton = ({ color, size, text, textColor, icon, onClick, ...rest}) => {
    return (
        <Button
            type="button"
            className={`custom-button ${color} ${size}`}
            style={{color: textColor }}
            onClick={onClick}
            {...rest}
        >
            {icon && (
                <IconContext.Provider value={{ size: "1.4em" }}>
                    {React.cloneElement(icon, { style: { color: "white", paddingLeft: "20px" } })}
                </IconContext.Provider>
            )}
            {text}
        </Button>
    );
}

CustomButton.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    icon: PropTypes.object,
};


export default CustomButton;