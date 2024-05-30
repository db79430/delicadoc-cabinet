import {styled} from "@mui/system";
import {Box, Checkbox, FormControlLabel, Modal, TextField, Typography} from "@mui/material";
import {IoCloseOutline} from "react-icons/io5";


export const StyleModalDialog = styled(Modal) ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
})
export const StyledModal = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '370px',
    height: '700px',
    borderRadius: '40px',
    marginTop: '50px',
    backgroundColor: 'rgb(255, 251, 244)',
    padding: 0,
    top: 0,
    position: 'absolute',
});

export const StyledContainer = styled(Box) ({

})

export const StyledTitle = styled(Typography)({
    display: 'flex',
    textAlign: 'center',
    fontFamily: '"Flame Regular", sans-serif',
    fontSize: '30px',
    color: '#FF7505',
    position: 'relative',
});

export const StyledTextField = styled(TextField)({
    boxSizing: 'border-box',
    borderRadius: '20px',
    width: '300px',
    height: '48px',
    margin: '10px 0',
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
        },
    },
    '& .MuiInputBase-input': {
        color: '#341700',
        fontFamily: '"Flame Regular", sans-serif',
        paddingLeft: '16px',
    },
});

export const StyledFormLabel = styled(Typography)({
    display: 'flex',
    justifyContent: 'flex-start',
    textAlign: 'left',
    color: 'rgb(255, 117, 5)',
    fontSize: '16px',
    margin: '5px',
    fontFamily: '"Flame Regular", sans-serif',
});

export const CloseButton = styled(IoCloseOutline)({
    position: 'absolute',
    width: '25px',
    height: '25px',
    left: '90%',
    top: '20px',
    color: '#341700',
    cursor: 'pointer',
});

export const FormContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
});

export const FormGroup = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
});

export const StyledCheck = styled(Checkbox)({
    color: '#FF7505', // Set checkbox color to orange
    marginLeft: '10px', // Set left margin to 20px
});

export const StyledFormControlLabel = styled(FormControlLabel)({
    color: '#FF7505',
    '& .MuiTypography-root': {
        fontFamily: '"Flame Regular", sans-serif',
        fontSize: '12px',
    },

    '& .MuiCheckbox-root': {
        color: '#FF7505',
    }
});