import {styled} from "@mui/system";
import {Box, Modal, TextField, Typography} from "@mui/material";
import {IoCloseOutline} from "react-icons/io5";

export const StyleModalDialog = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'auto',
});

export const StyleButtonUp = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
});

export const StyledModal = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: '40px',
    marginTop: '50px',
    backgroundColor: 'rgb(255, 251, 244)',
    padding: 0,
    top: 0,
    position: 'absolute',
    width: '670px',
    height: '901px',
});

export const StyledContainer = styled(Box)({});

export const StyledBox = styled(Box)({
    padding: 24,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '32px'
})

export const StyledTitle = styled(Typography)({
    display: 'flex',
    textAlign: 'center',
    fontFamily: '"Flame Regular", sans-serif',
    fontSize: '30px',
    color: '#FF7505',
    position: 'relative',
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

export const StyledTypography = styled(Typography)({
    color: 'rgb(255, 117, 5)',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: '"Flame Regular", sans-serif',
})

export const StyledTypographyInvalid = styled(Typography)({
    color: 'rgb(255, 117, 5)',
    fontSize: '18px',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: '"Blue curve", sans-serif',
    textAlign: 'center',
    marginBottom: "16px",
    width: "370px"
})

export const StyledFormLabel = styled(Typography)({
    display: 'flex',
    position: 'absolute',
    justifyContent: 'flex-start',
    color: 'rgb(255, 117, 5)',
    fontSize: '16px',
    fontFamily: '"Flame Regular", sans-serif',
    padding: '24px',
    width: '82%',
    textAlign: 'left',
    marginBottom: '20px'
});

export const StyledTextField = styled(TextField)({
    boxSizing: 'border-box',
    borderRadius: '20px',
    width: '600px',
    margin: '16px',
    '& .MuiOutlinedInput-root': {
        height: '84px',
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
        paddingLeft: '24px',
    },
});
export const FormGroup = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
});



