import {apiBot, apiWeb} from "../../api/Api";
import {
    setCheckFields,
    setChecks,
    setInfoPromo, setPrizesUser, setSelectPointsUser,
    setUserAuthenticated,
    setUserInfo,
    setUserRecoveryPassword, setUserToken,
    setWeekInfoPromo
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
            dispatch(setWeekInfoPromo(data.data))
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

// export const userAuthenticated = (data) => dispatch => {
//     return apiWeb.postUserAuthenticated(data).then(data => {
//         dispatch(setUserAuthenticated(data.user));
//         dispatch(setUserToken(data.token));
//         return data;
//     }).catch(error => {
//         if (error.response.status === 412) {
//             alert("Неверные данные для входа")
//         }
//     })
// };

export const userAuthenticated = (data) => async dispatch => {
    try {
        const response = await apiWeb.postUserAuthenticated(data);
        dispatch(setUserAuthenticated(response));
        dispatch(setUserToken(response.token));
        return response;
    } catch (error) {
        if (error.response && error.response.status === 412) {
            alert("Неверные данные для входа");
        } else {
            throw error;
        }
    }
};

// export const userInfo = (token, data) => async dispatch  => {
//     try {
//         const response = await apiWeb.getUserInfo(token);
//         dispatch(setUserInfo(response.data));
//         dispatch(setUserToken(token));
//         return response;
//     } catch (error) {
//         if (error.response && error.response.status === 412) {
//             alert("Неверные данные для входа");
//         } else {
//             throw error;
//         }
//     }
// };

export const userInfo = (token) => async (dispatch) => {
    try {
        const response = await apiWeb.getUserInfo(token);
        dispatch(setUserInfo(response.data));
        return response;
    } catch (error) {
        if (error.response && error.response.status === 412) {
            alert("Неверные данные для входа");
        } else {
            throw error;
        }
    }
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

export const userGift = (token) => (dispatch) => {
    dispatch(setUserToken(token));
    return apiWeb.getGiftUser(token).then(response => {
        dispatch(setPrizesUser(response.data))
        return response;
    }).catch(error => {
        if (error.response && error.response.status === 412) {
            alert("Неверные данные для входа");
        }
    });
};

export const userSelectPoints = (token, data) => (dispatch) => {
    dispatch(setUserToken(token));
    return apiWeb.postSelectPointsUser(token, data)
        .then(response => {
            dispatch(setSelectPointsUser(data));
            return response;
        })
        .catch(error => {
            if (error.response && error.response.status === 412) {
                alert("Не хватает баллов для обмена");
            } else {
                console.error("Ошибка при выборе купона:", error);
                throw error;
            }
        });
};


export const uploadCheckFoto = (promo, token) => (dispatch, getState) => {
    dispatch(setUserToken(token));
    return apiBot.postUpdateCheckFoto(promo, token).then(response => {
        return response;
    })
}

export const uploadCheckFields = (promo, token, data) => (dispatch, getState) => {
    dispatch(setUserToken(token));
    return apiBot.postUpdateCheckFields(promo, token, data).then(response => {
        dispatch(setCheckFields(data))
        return response;
    })
}

