import {apiWeb} from "../../api/Api";
import {
    setChecks,
    setInfoPromo,
    setUserAuthenticated,
    setUserInfo,
    setUserRecoveryPassword, setUserToken,
    setWeekIngoPromo
} from "../action/action";
import {Navigate, useLocation} from "react-router-dom";
import React from "react";


export const getInfoPromoUsers = () => {
    return (dispatch) => {
        apiWeb.getInfoGiftPromo().then(data => {
            dispatch(setInfoPromo(data.data))
        })
    }
}

export const registrationUser = (newUser) => dispatch => {
    return apiWeb.postRegistrationUser(newUser).then(response => {
        // dispatch(setRegistrationUser(data))
        return response
    })
}


export const getWeekInfoPromo = () => {
    return (dispatch) => {
        apiWeb.getInfoPromo().then(data => {
            dispatch(setWeekIngoPromo(data.data))
        })
    }
}

// export const userAuthenticated = (data) => {
//
//     return async (dispatch) => {
//         await apiWeb.postUserAuthenticated(data)
//             .then(response => {
//                 if (response.status === 200) {
//                     const { token, user } = response.data;
//                     dispatch(setUserAuthenticated(user));
//                     dispatch(setUserToken(token));
//                     dispatch(setUserInfo(user));
//                     console.log(data.token)
//                     return response
//                 }
//             })
//             .catch(error => {
//                 console.error('Authentication error', error);
//             });
//     }
// };

export const userAuthenticated = (data) => dispatch => {
    return apiWeb.postUserAuthenticated(data).then(data => {
        dispatch(setUserAuthenticated(data.user));
        dispatch(setUserToken(data.token));
        return data;
    }).catch(error => {
        if (error.response.status === 412) {
            alert("Неверные данные для входа")
        }
    })
};

export const userInfo = (token) => (dispatch, getState) => {
    dispatch(setUserToken(token));
    return apiWeb.getUserInfo(token).then(response => {
        dispatch(setUserInfo(response));
        dispatch(setUserRecoveryPassword(response.token));
        return response;
    }).catch(error => {
        if (error.response && error.response.status === 412) {
            alert("Неверные данные для входа");
        }
    });
};

export const restorePassword = (data) => {
    return async (dispatch) => {
        await apiWeb.postRecoveryPassword(data).then(data => {
            dispatch(setUserRecoveryPassword(data.data))
        })
    }
};

export const checksUser = (token) => (dispatch, getState) => {
    dispatch(setUserToken(token));
    return apiWeb.getChecksUser(token).then(response => {
        dispatch(setChecks(response.data));
        return response;
    }).catch(error => {
        if (error.response && error.response.status === 412) {
            alert("Неверные данные для входа");
        }
    });
};

