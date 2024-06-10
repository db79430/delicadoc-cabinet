import {
    SET_AUTHENTICATED_USER, SET_CHECK_FIELDS,
    SET_INFO_PROMO,
    SET_RECOVERY_PASSWORD,
    SET_REGISTRATION_USER, SET_USER_INFO,
    SET_WEEK_INFO_PROMO
} from "../constant/constant";

export const setInfoPromo = (promoUsers) => ({
    type: "SET_INFO_PROMO",
    promoUsers
});

export const setRegistrationUser = (user) => ({
    type: "SET_REGISTRATION_USER",
    user

})

export const setUserAuthenticated = (user) => ({
    type: "SET_AUTHENTICATED_USER",
    user

})

export const setUserRecoveryPassword = (email_phone) => ({
    type: "SET_RECOVERY_PASSWORD",
    email_phone

})


export const setWeekInfoPromo = (week_day) => ({
    type: "SET_WEEK_INFO_PROMO",
    week_day
})

export const setUserInfo = (user_data) => ({
    type: "SET_USER_INFO",
    user_data
})

export const setUserToken = (token) => ({
    type: 'SET_USER_TOKEN',
    token
});

export const setChecks = (checks) => ({
    type: 'SET_CHECKS',
    checks
});

export const setPrizesUser = (prizesUser) => ({
    type: 'SET_PRIZES_USER',
    prizesUser
})

export const setSelectPointsUser = (points) => ({
    type: 'SET_SELECT_POINTS_USER',
    points
})

export const setCheckFields = (checkFields) => ({
    type: SET_CHECK_FIELDS,
    checkFields
})
